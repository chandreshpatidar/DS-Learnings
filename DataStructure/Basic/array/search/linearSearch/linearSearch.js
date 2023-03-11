// Assuming array index position starting at 1

function linearSearch(arr, n, target) {
  for (let i = 1; i <= n; i++) {
    if (arr[i - 1] === target) return i;
  }

  return -1;
}

console.log("Item found at", linearSearch([5, 15, 6, 9, 4], 5, 4));
console.log("Item not found", linearSearch([5, 15, 6, 9, 4], 5, 14));
