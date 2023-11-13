/**
 * 回文数判断
 */
const isPalindrome = (number) => {
  const prevNumber = number.toString().split("");
  const resNumber = number.toString().split("").reverse();
  const resBoo = [];
  for (let i = 0; i < resNumber.length; i++) {
    if (prevNumber[i] === resNumber[i]) {
      resBoo.push(true);
    } else {
      resBoo.push(false);
    }
  }
  return resBoo.every((item) => item);
};

const n1 = 1234567887654321;
const n2 = 12346789;
const n3 = 1000021;

// const r1 = isPalindrome(n1);
// const r2 = isPalindrome(n2);
const r3 = isPalindrome(n3);

console.log(r3);
