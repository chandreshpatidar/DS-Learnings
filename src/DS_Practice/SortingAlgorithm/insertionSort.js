function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }

  return arr;
}

console.log(insertionSort([1, 10, 2, 5, 7, 3, -5, -10, -1, 0]));
