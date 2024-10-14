### new 操作符内在逻辑

```javascript
function myNew(constructor, ...args){
    // 创建一个新对象并链接到构造函数的原型
    const obj = Object.create(constructor.prototype)
    // 将构造函数的 this 指向新对象并执行构造函数
    const result = constructor.apply(obj, args)
    // 确保构造函数返回一个对象，如果没有则返回新对象
    return result instanceof Object ? result : obj;
}

function Person(name){
    this.name = name
}

const person1 = myNew(Person, "dasher")
console.log(person1.name)
```

