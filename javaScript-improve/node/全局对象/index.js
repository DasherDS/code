/**
 * setTimeout
 * - 在web中返回的是一个数字
 * - node 中返回的对象
 */

const timer1 = setTimeout(() => {}, 1000);
console.log(timer1);

/**
 * setInterval
 * - 在web中返回的是一个数字
 * - node 中返回的对象
 */

const timer2 = setInterval(() => {}, 1000);
console.log(timer2);
clearInterval(timer2);

/**
 * setImmediate
 * 类似于setTimeout 0
 */
const timer3 = setImmediate(() => {}, 0);
console.log(timer3);

/**
 * console 和 web一样
 */

/**
 * __dirname
 * 获取当前模块所在的目录(当前运行模块)
 * 并非global 属性
 */
console.log(__dirname);

/**
 * __filename
 * 获取当前模块的文件路径(当前运行模块)
 * 并非global 属性
 */

console.log(__filename);

/**
 * Buffer
 * 类型化数组
 * 继承自Unit8Array
 */
const buffer = Buffer.from("abcdefghijklmnopqrstuvwxyzABCDEF", "utf-8");
console.log(buffer);
