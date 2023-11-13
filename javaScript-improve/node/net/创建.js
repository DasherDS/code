const net = require("net");

const socket = net.createConnection(
  {
    host: "www.baidu.com",
    port: 80,
  },
  () => {
    console.log("连接成功");
  }
);

socket.on("data", (chunk) => {
  console.log("来自服务器的消息", chunk.toString("utf-8"));
  socket.end();
});

socket.write(`GET / HTTP/1.1
Host: www.baidu.com
Connection: keep-alive


`);

socket.on("close", () => {
  console.log("挂断了" );
});
