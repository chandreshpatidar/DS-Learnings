function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (arr[mid] == target) return mid;

    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log("Item found at", binarySearch([4, 5, 6, 9, 15], 15));
console.log("Item not found", binarySearch([4, 5, 6, 9, 15], 14));
