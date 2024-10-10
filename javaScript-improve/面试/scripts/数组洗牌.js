function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6];
const res = shuffleArray(arr);
console.log(res);
