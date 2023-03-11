// Assuming array index position starting at 1

function search(arr, size, target) {
  // not found
  if (size === 0) {
    return -1;
  }

  if (arr[size - 1] === target) return size;

  return search(arr, size - 1, target);
}

function linearSearch(arr, n, target) {
  return search(arr, n, target);
}

console.log("Item found at", linearSearch([5, 15, 6, 9, 4], 5, 4));
console.log("Item not found", linearSearch([5, 15, 6, 9, 4], 5, 14));
