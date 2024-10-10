const arr = [[1, 2], [3, 4, 5], [[6, 7, [8, 9, 110]]], [11, 12], [13]];

function flattenArray(arr) {
  return arr.reduce((total, item) => {
    if (Array.isArray(item)) {
      return total.concat(flattenArray(item));
    } else {
      return total.concat(item);
    }
  }, []);
}

console.log(flattenArray(arr));
