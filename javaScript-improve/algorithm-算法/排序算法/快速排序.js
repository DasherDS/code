/**
 * 交换位置
 */
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const arr = [2, 5, 1, 3, 8, 6, 9, 4];

const quickSort = (arr) => {
  if (arr == null || arr.length == 0) return [];

  const mid = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);

  left.push(mid);
  return [...left, ...right];
};

// const res = quickSort(arr);
// console.log(res);

/**
 * 左右指针法
 */
const quickSort2 = (arr, begin, end) => {
  if (begin >= end - 1) return;
  let left = begin;
  let right = end;
  do {
    do left++;
    while (left < right && arr[left] < arr[begin]);

    do right--;
    while (right > left && arr[right] > arr[begin]);

    if (left < right) {
      swap(arr, left, right);
    }
  } while (left < right);
  let swapPoint = left === right ? right - 1 : right;
  swap(arr, begin, swapPoint);
  quickSort2(arr, begin, swapPoint);
  quickSort2(arr, swapPoint + 1, end);
};

quickSort2(arr, 0, arr.length);
console.log(arr);
