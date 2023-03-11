function reverseArr(arr) {
  let temp = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }

  return temp;
}

console.log(reverseArr([1, 2, 3, 4, 5, 6]));

// Using recursion
function reverseArrUsingRecursion(arr, start, end) {
  if (start > end) return arr;

  const temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  return reverseArrUsingRecursion(arr, start + 1, end - 1);
}

console.log(reverseArrUsingRecursion([1, 2, 3, 4, 5, 6], 0, 5));
