/**
 * 一个青蛙一次可以跳上1级台阶，也可以跳上2级台阶，求该青蛙跳上一个n级台阶总共有多少种跳法
 */

function solution1(n) {
  if (n <= 1) {
    return 1;
  }
  if (n <= 2) {
    return 2;
  }

  return solution1(n - 1) + solution1(n - 2);
}

const res1 = solution1(10);
console.log(res1);

function solution2(n) {
  let a = 0;
  let b = 0;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    a = b;
    b = result;
    result = a + b;
  }
  return result;
}
const res2 = solution2(10);
console.log(res2);
