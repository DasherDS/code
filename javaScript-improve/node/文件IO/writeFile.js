const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./1.txt");

// 默认是utf-8   写入覆盖写法
fs.promises.writeFile(filename, "按阿斯顿").then((res) => {
  console.log("写入成功");
});

// 默认是utf-8   写入追加写法
fs.promises
  .writeFile(filename, "啊实打实大苏打实打实发光管广告歌广告歌", { flag: "a" })
  .then((res) => {
    console.log("追加写入成功");
  });

// 文件如果不存在的话就会新建  不可以写目录
const filename2 = path.resolve(__dirname, "./2.txt");
fs.promises.writeFile(filename2, "按阿斯顿").then((res) => {
  console.log("写入成功");
});