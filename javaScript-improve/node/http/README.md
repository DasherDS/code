### `http`

- `http`模块建立在`net`模块之上
  - 无须手动管理`socket`
  - 无须手动组装消息格式
- [`http.reuest(url[, options][, callback])`](https://www.nodejs.com.cn/api/http.html#httprequesturl-options-callback)
- `http.createServer([options][, requestListener])`
- 总结
  - 我是客户端
    - 请求：`ClientRequest`对象
    - 响应：`IncomingMessage`对象
  - 我是服务器
    - 请求：`IncomingMessage`对象
    - 响应：`ServerResponse`对象

