- `timers`：存放计时器的回调函数

- `poll`：轮询队列

  - 除了`timers`,`checks`

  - 绝大部分回调都会放入该队列

  - 比如：文件的读取、监听用户的请求

  - 运作方式  

    - 如果`poll`中有回调，依次执行回调，直到清空队列   

    - 如果没有回调：等待其他队列中出现回调，结束该阶段，进入下一阶段（如果其他队列也没有回调，持续等待，直到出现回调为止）

- `check`：检查阶段
  
  - 使用`setImmediate`的回调会直接进入这个队列    
  
- 事件循环中，每次打算执行一个回调之前，必须要先清空`nextTick`和`promise`队列



---

### `EventEmitter`

- `node`事件管理的通用机制
- 内部维护多个事件队列