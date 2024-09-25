Promise.all = function (args) {
  return new Promise((resolve, reject) => {
    try {
      const result = [];
      let count = 0;
      let successCount = 0;

      for (const item of args) {
        let index = count;
        count++;
        Promise.resolve(item).then((res) => {
          result[index] = res;
          successCount++;
          if (count === successCount) {
            resolve(result);
          }
        }, reject);
      }

      if (count === 0) {
        reject(new Error("参数必须是迭代器"));
      }
    } catch (error) {
      reject(error);
    }
  });
};

const p = [Promise.resolve(1), Promise.resolve(2), 3];

Promise.all(null)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(1, err);
  });
