function rotateFromRight(arr, n, d) {
  let temp = [];
  let k = 0;
  d = d % n;

  for (let i = n - d; i < n; i++) {
    temp[k] = arr[i];
    k++;
  }

  for (let i = 0; i < n - d; i++) {
    temp[k] = arr[i];
    k++;
  }

  return temp;
}

console.log(rotateFromRight([1, 2, 3, 4, 5], 5, 1));

function rotateFromRightWithReverse(arr, n, d) {
  function reverse(arr, start, end) {
    // Using for loop
    for (let i = start; i < end; i++) {
      const temp = arr[i];
      arr[i] = arr[end];
      arr[end] = temp;
      --end;
    }

    // Un-comment, if want reverse with recursion
    // if (start > end) return arr;
    // const temp = arr[start];
    // arr[start] = arr[end];
    // arr[end] = temp;

    // return reverse(arr, ++start, --end);
  }

  d = d % n;

  reverse(arr, n - d, n - 1);
  reverse(arr, 0, n - d - 1);
  reverse(arr, 0, n - 1);

  return arr;
}

console.log(rotateFromRightWithReverse([1, 2, 3, 4, 5], 5, 18));
