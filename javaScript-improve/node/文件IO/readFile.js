const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./1.txt");

fs.readFile(
  filename,
  {
    encoding: "utf8",
  },
  (err, content) => {
    console.log(content.toString("utf-8"));
    console.log(content);
  }
);

fs.readFile(filename, (err, content) => {
  console.log(content.toString("utf-8"));
});

fs.readFile(filename, (err, content) => {
  console.log(content);
});

// 同步读取  容易阻塞 不建议使用  一般在初始化的时候使用
const content = fs.readFileSync(filename, "utf-8");
console.log(content);

// 函数中可以使用async 和 await
fs.promises.readFile(filename, "utf-8").then((res) => {
  console.log(res, "es6写法");
});
