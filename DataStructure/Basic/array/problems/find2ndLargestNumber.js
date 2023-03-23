function print2largest(arr, n) {
  let first, second;
  first = Number.NEGATIVE_INFINITY;
  second = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < n; i++) {
    const num = arr[i];
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  if (second == Number.NEGATIVE_INFINITY) return -1;

  return second;
}

console.log(print2largest([12, 35, 1, 10, 34, 1], 6));
console.log(print2largest([-12, -35, -1, -10, -34, -1], 6));
