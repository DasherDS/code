### vue2 不能监听数组下标原因

Vue2 用的是 `Object.defineProperty` 劫持数据实现数据视图双向绑定。**`Object.defineProperty`是可以劫持数组的**

- 真实情况：`Object.defineProperty`可以劫持数组但是vue2没有用来劫持是因为 `Object.defineProperty`是属性级别的劫持，如果劫持数组，随着数组长度增加，会有很大的性能消耗，导致框架的性能不稳定，因此vue2放弃一定的用户便捷性，提供了$set 方法去操作数组，以最大程度保证框架的性能稳定