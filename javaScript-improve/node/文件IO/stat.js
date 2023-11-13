const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./1.txt");

fs.promises.stat(filename).then((res) => {
  console.log(res);
  // 是否是目录
  console.log(res.isDirectory());
  // 是否是文件
  console.log(res.isFile());
});


