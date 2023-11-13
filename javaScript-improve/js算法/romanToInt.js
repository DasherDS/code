const romanToInt = (str) => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] < obj[str[i + 1]]) {
      num -= obj[str[i]];
    } else {
      num += obj[str[i]];
    }
  }
  return num;
};

const res = romanToInt("III");
console.log(res);
