function swap(arr, start, end) {
  [arr[start], arr[end]] = [arr[end], arr[start]]; // Using destructuring
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    swap(arr, minIndex, i);
  }

  return arr;
}

console.log(selectionSort([5, 10, 4, 2, 1, 85, 10]));
