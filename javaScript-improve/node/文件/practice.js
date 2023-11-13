const fs = require("fs");
const path = require("path");

// 使用流的方式复制  手动复制  
// 相对于手写  rs.pipe(ws)

// 内存空间占用会很少
function handleStream() {
  const form = path.resolve(__dirname, "./2.txt");
  const to = path.resolve(__dirname, "./copy2.txt");

  const rs = fs.createReadStream(form);
  const ws = fs.createWriteStream(to);

  // 开始读取  读一点写一点
  rs.on("data", (chunk) => {
    const flag = ws.write(chunk);
    // 如果读的速度过快写的太慢造成背压问题出现  暂停
    if (!flag) {
      rs.pause();
    }
  });

  // 背压消除后通过清空出现触发 drain 事件  恢复读取
  ws.on("drain", () => {
    rs.resume();
  });

  rs.on("close", () => {
    console.log("写完了");
    ws.end();
  });
}

handleStream();


