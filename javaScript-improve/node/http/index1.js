const http = require("http");

const request = http.request(
  "http://www.baidu.com/",
  {
    method: "GET",
  },
  (res) => {
    console.log("服务器响应的状态码", res.statusCode);
    console.log("获取响应头", res.headers);

    res.on("data", (chunk) => {
      console.log("响应体", chunk);
    });
  }
);

// request.write();
request.end();
