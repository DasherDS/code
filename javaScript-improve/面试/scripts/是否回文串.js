function solution(str) {
  const set = new Set();
  str.split("").forEach((item) => {
    if (set.has(item)) {
      set.delete(item);
    } else {
      set.add(item);
    }
  });
  return set.size <= 1;
}

const str1 = "racecar";
const res = solution(str1);
console.log(res);
