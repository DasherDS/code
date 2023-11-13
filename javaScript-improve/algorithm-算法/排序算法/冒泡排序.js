/**
 * 交换位置
 */
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const arr = [2, 5, 3, 4, 9, 8, 1, 6, 10];

const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      // i 增大，内层循环比较次数n-i 因为第一趟的时候已经比较过了
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

bubbleSort(arr);
console.log(arr);

// 优化后的排序
const bubbleSort2 = (arr) => {
  if (!arr) return;
  const len = arr.length;
  let k = len - 1;
  let swapPos = 0;

  for (let i = 0; i < len; i++) {
    let hasSore = true;
    for (let j = 0; j < k; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        hasSore = false;
        swapPos = j;
      }
    }
    if (hasSore) {
      break;
    }
    k = swapPos;
  }
};

bubbleSort2(arr);
console.log(arr);

