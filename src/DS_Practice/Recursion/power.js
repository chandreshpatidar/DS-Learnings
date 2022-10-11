function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return base * power(base, --exponent);
}

console.log('Should print 1 ->', power(2, 0));
console.log('Should print 4 ->', power(2, 2));
console.log('Should print 16 ->', power(2, 4));
console.log('Should print 27 ->', power(3, 3));
