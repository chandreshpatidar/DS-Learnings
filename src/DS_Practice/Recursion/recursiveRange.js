/**
 * Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(--num);
}

console.log('Should print 21 ->', recursiveRange(6));
console.log('Should print 55 ->', recursiveRange(10));