### bind，apply，call 的区别，及内在实现

**call方法**：

- 用于调用一个函数，显示指定函数内部的 `this`指向，参数以列表的形式传递给函数。

- 语法：`func.call(thisArg,arg1,arg2,...)`

- 直接调用函数，立即执行

- 用法和模拟实现

  ```javascript
  Function.prototype.myCall = function (context,...args) {
      context = context || window; // 如果没有传入上下文，则默认认为全局对象
      const uniqueID = Symbol();// 创建一个唯一的键，以避免属性名冲突
      context[uniqueID] = this; // 在上下文中添加一个属性，将函数赋值给这个属性
      const result = context[uniqueID](...args); // 调用函数
      delete context[uniqueID] // 删除属性
      return result;
  }
  
  function greet(message){
      console.log(`${message}, ${this.name}`)
  }
  
  const person = {
      name:"dasher"
  }
  
  greet.myCall(person, 'hello'); // 输出 hello dasher
  
  greet.call(person, 'hello'); // 输出 hello dasher
  ```

**appay** 方法

- 用于调用一个函数，显示指定函数内部 `this` 指向，参数以数组的形式传递给函数

- 语法：`func.apply(thisArg,[arg1,arg2,...])`

- 用法和实现

  ```javascript
  Function.prototype.myApply = function (context, args) {
      context = context || window;
      const uniqueID = Symbol()
      context[uniqueID] = this
      const result = context[uniqueID](...args)
      delete context[uniqueID]
      return result
  }
  
  function greet(message){
      console.log(`${message}, ${this.name}`)
  }
  
  const person = {
      name:"dasher"
  }
  
  greet.myApply(person, ['HI']) // Hi dasher
  
  greet.apply(person, ['HI'])// Hi dasher
  ```

`bind` 方法

- bind 方法不会立即调用函数，而是创建一个新的函数，该函数的 this 指向由 bind 的第一个参数指定，参数以列表的形式传递给函数

- 语法：`newFunc = func.bind(thisArg, arg1, arg2, ...)`

- 不会立即执行函数，而是返回一个新的函数

- 用法和实现

  ```javascript
  Function.prototype.myBind = function (context, ...args){
      const func = this
      return function (...newArgs){
          return func.apply(context, args.concat(newArgs))
      }
  }
  
  
  function greet(message){
      console.log(`${message}, ${this.name}`)
  }
  
  const person = {
      name:"dasher"
  }
  
  const myBoundGreet = greet.myBind(person, 'hey')
  myBoundGreet() // hey dasher
  
  const boundGreet = greet.bind(person, 'hey')
  boundGreet() // hey dasher
  ```

  