### 类组件（class components）和 函数式组件（functional components）区别

类组件（class components）：

- 通过继承 React.Component 类开定义组件
- 可以包含自己的状态（state）和生命周期方法（lifecycle methods）
- 可以使用this关键字来访问组件的状态和props
- 可以使用ref来访问DOM元素或子组件
- 可以使用setState方法来更新组件的状态，触发组件的重新渲染
- 通常用于复杂的组件，需要管理自己的状态并响应生命周期事件

函数式组件（functional component）：

- 通过函数来定义组件，接收props作为参数，返回JSX元素
- 没有自己的状态和生命周期方法
- 不能使用this关键字来访问组件的状态和props
- 通常用于简单的展示组件，只关注UI的呈现和展示，不需要管理状态和响应生命周期事件