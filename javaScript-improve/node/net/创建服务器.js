const net = require("net");
const server = net.createServer();

server.listen(9439);

server.on("listening", () => {
  console.log("监听");
});

server.on("connection", (socket) => {
  console.log("客户端连接了");

  socket.on("data", (chunk) => {
    console.log("客户端发送的消息", chunk.toString("utf-8"));

    socket.write(`HTTP/1.1 200 OK

<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>createCanvas</title>
</head>
<body>
  <h1>你好</h1>
</body>
</html>
`);

    socket.end();
  });

  socket.on("end", () => {
    console.log("连接关闭了");
  });
});
