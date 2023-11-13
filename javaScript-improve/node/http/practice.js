const http = require("http");
const URL = require("url");
const path = require("path");
const fs = require("fs");

async function getStat(filename) {
  try {
    return await fs.promises.stat(filename);
  } catch (error) {
    return null;
  }
}

/**
 * 得到要处理的文件信息
 */
async function getFileInfo(url) {
  const urlObj = URL.parse(url);
  console.log(urlObj.pathname);
  // 要处理的文件路径
  let filename;
  filename = path.resolve(__dirname, "publicTest", urlObj.pathname.substr(1));
  let stat = await getStat(filename);
  if (!stat) {
    // 文件不存在
    console.log("文件不存在");
    return null;
  } else if (stat.isDirectory()) {
    // 文件是目录
    filename = path.resolve(
      __dirname,
      "publicTest",
      urlObj.pathname.substr(1),
      "index.html"
    );
    stat = await getStat(filename);
    if (!stat) {
      console.log("文件不存在");
      return null;
    } else {
      return await fs.promises.readFile(filename);
    }
  } else {
    console.log("正常文件");
    return await fs.promises.readFile(filename);
  }
}

async function handler(req, res) {
  const info = await getFileInfo(req.url);
  if (info) {
    res.write(info);
  } else {
    res.statusCode = 404;
    res.write("资源不存在");
  }
  res.end();
}

const server = http.createServer(handler);

server.on("listening", () => {
  console.log("服务运行在 9439");
});

server.listen(9439);
