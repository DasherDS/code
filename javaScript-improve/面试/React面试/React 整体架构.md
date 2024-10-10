### React整体架构

> 面试题 是否了解过 `React` 架构？ 新的`Fiber` 架构相较于之前的`Stack`架构有什么优势？

简单回答：`Stack` 架构在进行虚拟 `DOM` 树比较的时候，采用的是递归，计算会消耗大量的时间，新的`Fiber` 架构采用的是链表，可以实现时间切片，防止`JS`的计算占用过多的时间从而导致浏览器出现丢帧的现象。



**`react v15` 之前的为stack架构  `react v16`开始 使用的是Fiber架构   最大的特点是能够实现 时间切片**



#### 旧架构的问题

`react` 是用 `js` 构建快速响应的大型Web应用程序的首选方式

**CPU 瓶颈**

*   当通过`js`或者`css`修改dom元素的几何属性（长度，宽度）时，会触发完整的流水线，这种情况称之为重排（回流）
*   当修改的属性不涉及几何属性（字体、颜色）时会省略流水线中的Layout、Layer过程，这种情况称之为重绘
*   当修改不涉及重排、重绘的属性（比如 transform属性）时，会省略流水线中的Layout、Layer、Print过程，仅执行合成线程的绘制工作，这种情况称之为合成

性能高低   合成 > 重绘 > 重排

执行`js`和渲染流水线在同一个线程上面执行，也就意味着如果js执行时间过长，不能够及时的渲染下一帧，也就意味着页面掉帧，表现出来的现象就是页面卡顿

v15之前就存在这个问题。`js`代码执行时间过长，在react中，需要去计算整个虚拟dom树，虽然说是js层面的计算，相比直接操作dom节省了很多时间，但是每次重新计算整颗dom树会造成每一帧的js代码执行时间过长，从而导致动画还有一些更新得不到及时的响应，造成卡顿的视觉效果。

**I/O瓶颈**

对于前端来讲，最主要的i/o瓶颈就是网络延迟

react团队给的答案：将人机交互的研究成功整合到`UI`中。

对于react来讲，所有的操作都是来自于自变量变化导致的重新渲染，具体来说包含以下三点：

*   为不同操作造成的自变量变化赋予不同的优先级
*   所有优先级统一调度，优先处理最高优先级的更新
*   如果更新正在运行（进入虚拟`dom`相关工作）此时又更高优先级的更新产生的话，中断当前的更新，优先处理高优先级更新

要实现上面的这三个点，就需要react底层实现

*   用于调度优先级的调度器
*   调度器对应的调度算法
*   支持可中断的虚拟`dom`的实现

#### 新架构的解决思路

**解决CPU瓶颈**

从`v16`开始，官方正式引用了Fiber的概念，这是一种通过链表来描述`UI`的方式，本质上可以看作是一种虚拟DOM的实现。



Fiber本质上也是一个对象，但是和之前React元素不同的地方在于对象之间使用链表的结构串联起来，child指向子元素，sibling指向兄弟元素，return指向父元素



使用链表这种结构，有一个最大的好处就是在进行整颗数的对比计算时，这个过程是可以被打断在发现一帧时间已经不够不能够再继续执行`js`需要渲染下一帧的时候，这个时候就会打断`js`的执行，优先渲染下一帧，渲染完成后再接着回来完成上一次没有执行完的js计算



创建Fiber的源码

```javascript
const createFiber = function(tag, pendingProps,key,mode){
	// 创建 fiber 节点的实例对象
	return new FiberNode(tag,pengdingProps,key,mode)
}

function FiberNode(tag,pendingProps,key,mode){
	// instance
	this.tag = tag
	this.key = key
	this.elementType = null
	this.type = null
	this.stateNode = null // 映射真实的dom

	// fiber
	// 上下  前后fiber通过链表的形式进行关联
	this.return = null
	this.child = null
	this.sibling = null
	this.index = 0

	this.ref = null
	this.refCleanup = null 
	// 和 hook 相关
	this.pendingProps = pendingProps
	this.memoizedProps = null
	this.updateQueue = null
	this.memoizedState = null
	this.dependencies = null

	this.mode = mode

	// effects
	this.flags = NoFlags
	this.subtreeFlags = NoFlags
	this.deletions = null
	.....
}
```

**解决i/o瓶颈**

`v16` 开始引入了 Scheduler（调度器），用来调度任务的优先级

`v16`之前

*   Reconciler（协调器）`vdom`的实现，根据自变量的变化计算出`UI`的变化
*   Renderer（渲染器）负责将`UI`的变化渲染到宿主环境

新架构中 Reconciler 的更新流程从之前的递归变成了可中断的循环过程







最上面问题的标准回答

`React v15`及其之前的架构:&#x20;

*   Reconciler(协调器)\:`VDOM`的实现,负责根据自变量变化计算出UI变化&#x20;
*   Renderer(渲染器):负责将`UI`变化渲染到宿主环境中&#x20;

这种架构称之为Stack架构,在Reconciler中,mount的组件会调用`mountComponent`, update的组件会调用updateComponent,这两个方法都会递归更新子组件,更新流程一旦开开始,中途无法中断。

但是随着应用规模的逐渐增大,之前的架构模式无法再满足"快速响应"这一需求,主要受限于如下两个方面: 
- CPU瓶颈:由于`VDOM`在进行差异比较时,采用的是递归的方式代,`JS`计算会消耗大量的时间,从而导致动画、还有一些需要实 时更新的内容产生视觉上的卡顿。

- i/o 瓶颈：由于各种基于自变量变化而产生的更新任务没有优先级的概念，因此在某些更新任务（文本输入框）有稍微的延迟,对于用户来讲也是非常敏感的,会让用户产生卡顿的感觉。

新的架构称之为Fiber架构: 
- Scheduler(调度器):调度任务的优先级,高优先级任务会优先进入到Reconciler
- Reconciler(协调器):`VDOM`的实现,负责根据自变量变化计算出`UI`变化
- Renderer(渲染器):负责将`UI`变化渲染到宿主环境中

首先引入了Fiber的概念,通过一个对象来描述一个DOM节点,但是和之前方案不同的地方在于,每个Fiber对象之间过链表的 方式来进行串联。通过child来指向子元素,通过sibling指向兄弟元素,通过return来指向父元素。

在新架构中,`Reconciley`中的更新流程从递归变为了"可中断的循环过程"。每次循环都会调用`shouldYield`判断当前的`TimeSlice`是 否有剩余时间,没有剩余时间则暂停更新流程,将主线程还给渲染染流水线,等待下一个宏任务再继续执行。这样就解决了CPU的瓶 颈问题。

另外在新架构中还引入了Scheduler调度器,用来调度任务的优先级,从而解决了1/0的瓶颈问题。