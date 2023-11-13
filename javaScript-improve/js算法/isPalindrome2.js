const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x != 0)) return false;
  let revertedNumber = 0;
  let x2 = x;
  while (x2) {
    revertedNumber = revertedNumber * 10 + (x2 % 10);
    x2 = Math.floor(x2 / 10);
  }
  return revertedNumber === x;
};

const res = isPalindrome(121);
console.log(res);
