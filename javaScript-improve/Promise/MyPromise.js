// 记录promise的三种状态
const PENDING = "pengding";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

/**
 * 运行一个微队列任务
 * @param {Function} callback 
 */
function runMicroTask(callback) {}

class MyPromise {
  /**
   * @param {Function} excutor 任务执行器
   */
  constructor(excutor) {
    this._state = PENDING;
    this._value = undefined;

    try {
      excutor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise(() => {});
  }

  /**
   * 更改状态
   */
  _changeState(state, value) {
    if (this._state !== PENDING) {
      return;
    }
    this._state = state;
    this._value = value;
  }

  _resolve(data) {
    this._changeState(FULFILLED, data);
    console.log("完成", data);
  }

  _reject(reason) {
    this._changeState(REJECTED, reason);
    console.log("失败", reason);
  }
}

const pro = new MyPromise((resolve, reject) => {
  throw 123;
});

console.log(pro);
