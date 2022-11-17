function binarySearch(arr, target) {
  const arrLength = arr.length;

  let min = 0;
  let max = arrLength - 1;
  let mid = Math.floor((min + max) / 2);

  while (arr[mid] !== target && min <= max) {
    if (arr[mid] < target) {
      min = mid + 1;
    } else if (arr[mid] > target) {
      max = mid - 1;
    }
    mid = Math.floor((min + max) / 2);
  }

  if (arr[mid] === target) {
    return mid;
  } else {
    return -1;
  }
}

console.log('Index will be 1', binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log('Index will be 2', binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log('Index will be 4', binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log('Index will be -1', binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  'Index will be 2',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  'Index will be 16',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  'Index will be -1',
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
