const a = require("./nodejs01");
console.log(a);

/**
 * 模拟require
 */
function require(path) {
  // 1. 将path转换为绝对路径
  // 2. 判断是否该模块已有缓存  require.catch
  // 3. 读取文件内容
  // 4. 包裹到一个函数中 temp  函数的参数(module, exports, require, __dirname, __filename)
  // 5. 创建module对象 module.exports = {};  const exports = module.exports;
  // 6. 调用对象  temp.call(module.exports, module, exports, require, module.path, module.__filename)
}
