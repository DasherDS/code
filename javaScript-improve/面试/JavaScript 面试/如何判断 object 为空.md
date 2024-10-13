### 如何判断 `object` 为空

- 常用方法：
    - `Object.keys(obj).length === 0`
    - `JSON.stringify(obj) === '{}'`
    - `for in 判断`
- 以上的方法都不是太严谨，因为处理不了 `const obj = {[Symbol('a')]:1}这种情况`
- 更严谨的方法：`Reflect.ownKeys(obj).length === 0`



#### `Reflect.ownKeys(obj).length === 0`

含义：这个表达式用于判断一个对象 obj 是否没有自身属性。如果对象obj 没有任何自身属性（报告自身的可枚举和不可枚举属性以及Symbol 属性），那么`Reflect.ownKeys(obj).length`的结果为0。
