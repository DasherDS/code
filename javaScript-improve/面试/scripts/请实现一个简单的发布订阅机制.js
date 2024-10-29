class EventDispatcher {
  constructor() {
    this.events = {};
  }

  addEvent(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  trigger(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((item, index) => {
        item.apply(this.args);
      });
    }
  }
}

const target = new EventDispatcher();

target.addEvent("a", function () {
  console.log("a", this);
});

target.trigger("a");

/**
 * EventDispatcher 类
 * 构造函数：在构造函数中初始化一个 events 对象，用于存储不同事件名对应的回调函数数组
 * 
 * addEvent 方法：这个方法用于添加事件监听器，首先检查指定的事件名 是否已经存在events 对象中
 * 如果不存在就创建一个空数组来存储该事件的回调函数
 * 然后将传入的回调函数 添加到对应的事件名的数组中
 * 
 * trigger方法：当触发一个事件时，首先检查events对象中是否存在该事件名对应的回调函数数组，如果存在就遍历正数组
 * 对于数组中的每个回调函数，使用apply 方法来调用它，并传入正确的this值和其它参数
 */
