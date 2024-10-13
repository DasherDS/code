// /* A */
// const arr1 = [];
// for (let i = 0; i < 100000000; ++i) {
//   arr1[i] = 1;
// }

// /* B */
// const arr2 = [];
// arr2[10000 - 1] = 1;
// for (let i = 0; i < 100000000; ++i) {
//   arr2[i] = 1;
// }

// 测试
console.time("A");
const arr1_test = [];
for (let i = 0; i < 100000000; ++i) {
  arr1_test[i] = 1;
}
console.timeEnd("A");

console.time("B");
const arr2_test = [];
arr2_test[10000 - 1] = 1;
for (let i = 0; i < 100000000; ++i) {
  arr2_test[i] = 1;
}
console.timeEnd("B");

// A 的效率高

/**
 * 比较主流的JS 引擎是v8
 * v8 是一个c++实现的js引擎，内部有多种方式存放JS 数组
 * 数组 从 0 到 length - 1 无空洞  会进入快速模式，存放 array
 * 数组中间有空洞 会进入字典模式 存放为HashMap 
 * （这是v8 的一个优化策略，保证用最合适的数据结构处理当下场景，如果遇到数据量过大或者是松散结构的话
     就改变为HashMap 牺牲遍历性能，换取访问性能 ）
 *

 * 指导习惯：
      从 0 开始初始化数组，避免数组进入字典模式
      让数组保存紧凑，避免数组进入字典模式

   相关文章：https://itnext.io/v8-deep-dives-understanding-array-internals-5b17d7a28ecc
 */
