### webpack 的热更新原理

1. **监控文件变化**：Webpack 的开发服务器会监控项目中的所有的模块文件，包括 JS 文件、CSS 文件、模板文件等。
2. **模块热替换**：当你在代码中做出更改并保存时，Webpack 检测到文件变化，会首先通过热替换插件（Hot Module Replacement Plugin）生成新的模块代码。
3. **构建更新的模块**：生成的新模块代码会被构建成一个独立的文件或数据块。
4. **通知客户端**：Webpack 开发服务器将会更新的模块代码的信息发送到浏览器。
5. **浏览器端处理**：浏览器接收到更新的模块信息后，会在不刷新页面的情况下通过热替换运行时（Hot Module Replacement Runtime）替换响应的模块。
6. **应用程序状态保存**：热更新还可以保存应用程序的状态。当修改代码不会丢失已有的数据、用户登录状态等。
7. **回调处理**：允许在模块更新时执行自定义的回调函数，可以处理特定的逻辑，以确保模块更新后的正确性。
