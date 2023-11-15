const { EventEmitter } = require("events");

// 创建一个事件处理对象

const ee = new EventEmitter();

ee.on("abc", () => {
  console.log("abc事件触发了");
});

ee.emit("abc");
