### React中为什么要设计hook，为了解决什么问题

三个原因

- `Components` 不是`UI`逻辑复用困难
- 组件的生命周期函数不适合 `side effect` 逻辑管理
- 不友好的 `class Components`



**`side effect`（副作用）**：指那些影响组件外部系统（如浏览器`API`、网络请求、本地存储等）或需要在组件渲染后执行的操作。常见的副作用操作包括：

- 进行数据获取（例如`API`请求）
- 手动`DOM`操作
- 设置订阅（例如`websocket`或事件监听）
- 更新浏览器标题或与 `localStorage`交互