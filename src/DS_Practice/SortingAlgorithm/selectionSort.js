function selectionSort(arr) {
  if (!arr.length) return [];
  let minNumIndex;

  for (let i = 0; i < arr.length; i++) {
    minNumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minNumIndex]) {
        minNumIndex = j;
      }
    }

    const a = arr[minNumIndex];
    arr[minNumIndex] = arr[i];
    arr[i] = a;

    break;
  }

  return arr;
}

console.log(selectionSort([10, 2, 2, 2, 2]));
console.log(selectionSort([10, 2, 2, 1, 3, 2, 2, -10]));
