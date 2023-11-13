const fs = require("fs");
const path = require("path");

const dirname = path.resolve(__dirname, "./newDir");

fs.promises.mkdir(dirname).then((res) => {
  console.log("创建成功");
});
