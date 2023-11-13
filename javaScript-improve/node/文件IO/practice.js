/***
 * 读取一个目录中的所有子目录和文件
 */

/**
 *  * 属性
 * name：文件名
 * ext：后缀名，目录为空字符串
 * isFile：是否是一个文件
 * size：文件大小
 * createTime：日期对象，创建时间
 * updateTime：日期对象，修改时间
 */

/**
 *  *方法
 * getChildren()：得到目录的所有子文件对象，如果是文件，则返回空数组
 * getContent(isBuffer = false)：读取文件内容，如果是目录则返回null
 */

const fs = require("fs");
const path = require("path");

class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.isFile = isFile;
    this.size = size;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  async getContent(isBuffer = false) {
    if (this.isFile) {
      if (isBuffer) {
        return fs.promises.readFile(this.filename);
      } else {
        return fs.promises.readFile(this.filename, "utf-8");
      }
    }
    return null;
  }

  async getChildren() {
    if (this.isFile) {
      return [];
    }
    let children = await fs.promises.readdir(this.filename);
    children = children.map((name) => {
      const result = path.resolve(this.filename, name);
      return File.getFile(result);
    });
    return Promise.all(children);
  }

  static async getFile(file) {
    const stat = await fs.promises.stat(file);
    const name = path.basename(file);
    const ext = path.extname(file);
    const isFile = stat.isFile();
    const size = stat.size;
    const createTime = new Date(stat.birthtime);
    const updateTime = new Date(stat.mtime);
    return new File(file, name, ext, isFile, size, createTime, updateTime);
  }
}

async function readDir(dirname) {
  const file = await File.getFile(dirname);
  return await file.getChildren();
}

async function run() {
  const dirname = path.resolve(__dirname, "./newDir");
  const result = await readDir(dirname);
  console.log(result);
  const res1 = await result[0].getContent();
  console.log(res1);
}

run();
