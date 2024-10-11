function isPromise(obj) {
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}

Promise.resolve = function (data) {
  if (data instanceof Promise) {
    return data;
  }
  return new Promise((resolve, reject) => {
    if (isPromise(data)) {
      data.then(resolve, reject);
    } else {
      resolve(data);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((_, reject) => {
    reject(reason);
  });
};
