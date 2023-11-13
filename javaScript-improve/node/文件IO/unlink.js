const fs = require("fs");
const path = require("path");

const dirname = path.resolve(__dirname, "./d.md");

fs.promises.unlink(dirname).then((res) => {
  console.log("删除了");
});
