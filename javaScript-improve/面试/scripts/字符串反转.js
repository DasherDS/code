const str = "abcd";
const res1 = str.split("").reverse().join("");
console.log(res1);

const str2 = "hello world";
const res2 = Array.from(str2).reduce((total, item) => {
  return `${item}${total}`;
}, "");
console.log(res2);
