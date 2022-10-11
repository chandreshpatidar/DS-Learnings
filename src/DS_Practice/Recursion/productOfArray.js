/**
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.splice(1));
}

console.log('Should print 6 ->', productOfArray([1, 2, 3]));
console.log('Should print 60 ->', productOfArray([1, 2, 3, 10]));
