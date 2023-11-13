const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./1.txt");

const rs = fs.createReadStream(filename, {
  encoding: "utf8",
  highWaterMark: 1,
  autoClose: true, // 读完后自动关闭
});

rs.on("open", () => {
  console.log("文件被打开了");
});

rs.on("error", () => {
  console.log("出错了");
});

rs.on("close", () => {
  console.log("文件关闭了");
});

// rs.close()

rs.on("data", (chunk) => {
  console.log("正在读取", chunk);
  rs.pause();
});

rs.on("end", () => {
  console.log("全部读取完毕");
});

rs.on("pause", () => {
  console.log("文件暂停读取");
  setTimeout(() => {
    rs.resume();
  }, 100);
});

rs.on("resume", () => {
  console.log("文件恢复读取");
});
