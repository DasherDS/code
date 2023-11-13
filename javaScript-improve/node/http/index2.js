const http = require("http");
const url = require("url");

function handleReq(req) {
  console.log("有请求来了");
  const urlObj = url.parse(req.url);
  console.log("请求路径", urlObj);
  console.log("请求地址", req.url);
  console.log("请求头", req.headers);
  console.log("请求方法", req.method);

  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString("utf8");
  });

  req.on("end", () => {
    console.log("请求体", body);
  });
}

function handleRes(res) {
  res.setHeader("a", "2");
  res.setHeader("b", "9");

  res.write("你好！");
  res.end();
}

const server = http.createServer((req, res) => {
  handleReq(req);
  handleRes(res);
});

server.listen(9439);

server.on("listening", () => {
  console.log("正在监听");
});
