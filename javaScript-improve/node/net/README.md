# `net`

## 回顾`http`请求

### 普通模式

### 长连接模式

## `net`模块能干什么

### `net`是一个通信模块

### 利用它可以实现

- 进程间的通信 `IPC`
- **网络通信**  `TCP/IP`

## 创建客户端

* `net.createConnection(options[, connectListener])`
* 返回：`socket`
  * `socket`是一个特殊的文件
  * 在`node`中表现为一个双工流对象
  * 通过向流写入内容发送数据
  * 通过监听流的内容获取数据

## 创建服务器

- `net.createServer()`
- 返回：`server对象`
  - `server.listen(port)`
  - `server.on("listening", ()=>{})`
  - `server.on("connection", socket=>{})`
    - 当某个连接到来时，触发该事件
    - 事件的监听函数会获得一个`socket`对象