const fs = require("fs");
const path = require("path");

const filename2 = path.resolve(__dirname, "../");
// readdir  只能得到子文件不能得到孙文件
fs.promises.readdir(filename2).then((res) => {
  console.log(res);
});
