/**
 * 交换位置
 */
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const arr = [3, 6, 4, 2, 11, 10, 5];

// 最小的放到最前面
const selectSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
};

selectSort(arr);
console.log(arr);

// 放到最后面
const selectSort2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let maxIndex = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    swap(arr, maxIndex, arr.length - i - 1);
  }
};

selectSort2(arr);
console.log(arr);
