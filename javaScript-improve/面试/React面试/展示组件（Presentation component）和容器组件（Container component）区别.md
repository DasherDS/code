### 展示组件（Presentation component）和容器组件（Container component）区别

展示组件（presentation components）：

- 主要关注UI的呈现和展示，负责渲染和显示数据
- 通常是无状态的（stateless），接收来自容器组件的props，并根据props渲染UI
- 不关心数据的来源和逻辑处理，只负责展示和交互
- 通常是可复用的，可以在多个地方使用



容器组件（Container components）：

- 主要关注数据的获取和逻辑处理，负责管理数据和状态
- 通常是有状态的（stateful），可以包含自己的state，并通过props将数据传递给展示组件
- 可以通过Redux或其他状态管理库来管理应用程序的状态
- 可以包含多个展示组件，负责协调它们之间的交互和数据流动