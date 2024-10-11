Promise.prototype.finally = function (onSettled) {
  return this.then(
    (data) => {
      onSettled();
      return data;
    },
    (reason) => {
      onSettled();
      throw reason;
    }
  );
};
