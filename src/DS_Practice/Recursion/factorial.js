function factorial(num) {
  if (num === 0) return 1;

  if (num === 1) return 1;

  return num * factorial(--num);
}

console.log('Should print 1 ->', factorial(1));
console.log('Should print 2 ->', factorial(2));
console.log('Should print 24 ->', factorial(4));
console.log('Should print 5040 ->', factorial(7));

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
