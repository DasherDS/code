const util = require("util");

async function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

// 正常使用
// delay(500).then((res) => {
//   console.log(res);
// });

const delayCallback = util.callbackify(delay);

delayCallback(3000, (err, d) => {
  console.log(d);
});

function delay2(duration = 1000, callback) {
  setTimeout(() => {
    callback(null, duration);
  }, duration);
}

delay2(4000, (err, d) => {
  console.log(d);
});

const delay2Promise = util.promisify(delay2);

delay2Promise(3500).then((res) => {
  console.log(res);
});

const asFunction = async () => {
  const res = await delay2Promise(2500);
  console.log(res);
};

asFunction();

const obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: {
      f: 5,
    },
  },
};

const obj2 = {
  a: 1,
  b: 2,
  c: {
    d: 1,
    e: {
      f: 9,
    },
  },
};

console.log(util.isDeepStrictEqual(obj1, obj2));
