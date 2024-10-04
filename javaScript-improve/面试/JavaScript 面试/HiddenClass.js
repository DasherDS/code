/**
 * 隐藏类
 */

const obj1 = {
  a: 1,
};

const obj2 = {
  a: 1,
};

const obj3 = {
  a: 1,
};


// V8 是一个C++ 实现的 js 解析引擎，内部利用 隐藏类（Hidden Class）的方式来存放 js 对象

// 隐藏类的特性：多个属性顺序一致的JS 对象，会重用同一个隐藏类，减少new Class的开销