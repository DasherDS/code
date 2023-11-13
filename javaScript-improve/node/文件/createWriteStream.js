const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./2.txt");

const ws = fs.createWriteStream(filename, {
  encoding: "utf-8",
  highWaterMark: 1024 * 5,
  autoClose: true,
});

// const flag = ws.write("a");
// console.log(flag);

let i = 0;
function write() {
  let flag = true;
  while (i < 1024 * 1024 * 1) {
    flag = ws.write(`${i}`);
    i++;
  }
}

ws.on("drain", () => {
  console.log("通道清空可以写入");
  write();
});

write();

ws.on("close", () => {
  console.log("3s后关闭");
});

setTimeout(() => {
  ws.close();
}, 3000);
