const path = require("path");

const basename = path.basename("a/s/df/g/queueMicrotask.html");
// 获取文件最后一部分
// 第二个参数是匹配 匹配到就去掉 匹配不到就不去
console.log(basename);

console.log(path.sep);

console.log(path.delimiter);
console.log(process.env.path.split(path.delimiter));

const dir = path.dirname("a/s/df/g/queueMicrotask.html");
console.log(dir);

const ext = path.extname("a/s/df/g/queueMicrotask.html");
console.log(ext);

const fullpath = path.join("z", "d", "q", "q.js"); // ../ 是可以使用的
console.log(fullpath);

const normal = path.normalize("/foo/bar//baz/asdf/quux/..");
console.log(normal);

const rel = path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb");
console.log(rel);

const absPath = path.resolve("/data/orandea/test/aaa.js");
const absPath2 = path.resolve(__dirname, "./a.js"); // 当前模块下的绝对路径  不受命令框干扰
console.log(absPath);
console.log(absPath2);
