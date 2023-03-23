// This will find three largest number from array

function find3LargestNumber(arr) {
  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;
  let third = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third && arr[i] !== first && arr[i] !== second) {
      third = arr[i];
    }
  }

  return [first, second, third];
}

console.log(find3LargestNumber([12, 13, 34, 10, 34, 1]));
