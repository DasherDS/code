/* A */
const obj1 = {
  a: 1,
};
const obj2 = {
  a: 1,
};
const obj3 = {
  a: 1,
};
/* B */
const obj4 = {
  a: 1,
};
const obj5 = {
  b: 1,
};
const obj6 = {
  c: 1,
};

// 测试
console.time("a");
for (let i = 0; i < 100000; i++) {
  const obj = {};
  obj["a"] = i;
}
console.timeEnd("a");

console.time("b");
for (let i = 0; i < 100000; ++i) {
  const obj = {};
  obj[`${i}`] = i;
}
console.timeEnd("b");

// A 的效率高

/**
 * 比较主流的JS 引擎是v8 
 * v8 是一个c++实现的js引擎，内部利用隐藏类（Hidden Class）的方式来存放JS 对象
 * 隐藏类的特性是：多个 属性顺序一致 的JS 对象，会重用同一个隐藏类，减少 new class 的开销
 * 所以 A 生成一个隐藏类，而B 生成了3个隐藏类，因此左边代码性能更好。
 * 
 * 指导意见：定义对象或者类时，尽可能保证属性顺序一致。
 */