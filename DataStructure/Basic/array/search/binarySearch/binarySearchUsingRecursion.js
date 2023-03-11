function search(arr, start, end, target) {
  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) return mid;

  if (arr[mid] > target) {
    return search(arr, start, mid - 1, target);
  } else {
    return search(arr, mid + 1, end, target);
  }
}

function binarySearch(arr, target) {
  return search(arr, 0, arr.length, target);
}

console.log("Item found at", binarySearch([4, 5, 6, 9, 15], 9));
console.log("Item not found", binarySearch([4, 5, 6, 9, 15], 14));
