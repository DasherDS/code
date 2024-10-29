// 字符串中不含重复字符的最长子串长度

function solution(str) {
  let arr = [];
  let max = 0;
  for (let i = 0; i < str.length; ++i) {
    const sameIndex = arr.findIndex((item) => item === str[i]);

    arr.push(str[i]);
    if (sameIndex > -1) {
      arr = arr.splice(sameIndex + 1);
    }
    max = Math.max(max, arr.length);
  }
  return max;
}

const s = "abcabcbb";
const res = solution(s);
console.log(res);
