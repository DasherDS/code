### created 和 mounted 的区别

- created：
  - create 生命周期钩子在组件实例被创建之后立即被调用
  - 在这个阶段，组件实例已经被创建，但它的模版还没有渲染到DOM中。可以在这个阶段执行一些与数据初始化和逻辑处理相关的任务，但无法访问到已经渲染的DOM元素
  - 通常用于进行数据的初始化、设置初始状态、进行异步请求，已经数据准备好后执行逻辑
- mounted
  - mounted 生命周期钩子在组件的模版已经渲染到DOM中后触发
  - 在这个阶段，你可以访问和操作已经渲染的DOM元素。这通常用于执行需要访问DOM的任务，例如操作DOM元素，添加时间监听器。
  - 通常用于执行需要等待DOM渲染完成后才能执行的任务。以确保可以操作已经存在的DOM元素