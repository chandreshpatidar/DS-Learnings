function naivePatterSearch(mainStr, subStr) {
  let matchCount = 0;

  for (let m = 0; m < mainStr.length; m++) {
    for (let n = 0; n < subStr.length; n++) {
      if (subStr[n] !== mainStr[m + n]) {
        break;
      } else if (n === subStr.length - 1) {
        matchCount++;
      }
    }
  }

  return matchCount;
}

console.log('Should have 1 match', naivePatterSearch('chandresh', 'ch'));
console.log('Should have 2 match', naivePatterSearch('chandresh', 'h'));
console.log('Should have 0 match', naivePatterSearch('chand resh', 'has'));
console.log('Should have 1 match', naivePatterSearch('chand resh', ' re'));
console.log('Should have 2 match', naivePatterSearch('chand re sh', ' '));
