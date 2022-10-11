/**
 * Write a function called linearSearch which accepts an array and a value, and returns the i at which the value exists. If the value does not exist in the array, return -1.
 */

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log('Should print 1 ->', linearSearch([10, 15, 20, 25, 30], 15));
console.log(
  'Should print 5 ->',
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)
);
console.log('Should print 0 ->', linearSearch([100], 100));
console.log('Should print -1 ->', linearSearch([1, 2, 3, 4, 5], 6));
console.log(
  'Should print -1 ->',
  linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)
);
console.log('Should print -1 ->', linearSearch([100], 200));
