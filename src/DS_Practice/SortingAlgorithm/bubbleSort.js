function bubbleSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let a = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = a;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(bubbleSort([10, 2, 2, 3, 2, 2]));
console.log(bubbleSort([-10, 10, 2, 5, 7, 1, 3, -1]));
