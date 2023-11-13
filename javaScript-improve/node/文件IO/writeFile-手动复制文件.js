const fs = require("fs");
const path = require("path");

const handCopy = async () => {
  const fromFilename = path.resolve(__dirname, "./1.jpg");
  const readBuffer = await fs.promises.readFile(fromFilename);
  const toFilename = path.resolve(__dirname, "./2.jpg");
  try {
    await fs.promises.writeFile(toFilename, readBuffer);
    console.log("写入成功");
  } catch (error) {
    console.log("写入失败", error);
  }
};

handCopy();
