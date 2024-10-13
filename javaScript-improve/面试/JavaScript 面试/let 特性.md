### let 特性

1. 块级作用域

   ```javascript
   for(let i = 0; i < 10; ++i){
       setTimeout(()=>{
           console.log(i)
       },1000)
   }
   
   /* let 如果变成 var 会在一秒后输出 10 个 10，循环体变量会渗透到循环体外部，所以在setTimeout1秒的过程中，i的值实际上变成了 10 */
   
   /* 如果用var定义，可通过在循环体内添加一个立即执行函数，把迭代变量的作用域保护起来 */
   for(var i = 0; i< 10;++i){
       (function (index){
           setTimeout(()=>{
               console.log(i)
           },1000)
       })(i)
   }
   ```

   

2. 暂时性死区

   1. 在let声明之前的执行瞬间被称为暂时性死区，此阶段引用任何后面声明的变量会抛出 `ReferenceError` 错误

3. 同级作用域下不能重复声明

4. 全局声明会挂到 `Script` 下，不会挂在 `window`