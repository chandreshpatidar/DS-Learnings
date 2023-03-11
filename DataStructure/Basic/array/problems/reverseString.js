function reverseStr(str) {
  let temp = "";

  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }

  return temp;
}

console.log(reverseStr("chandresh"));

// With recursion
function reverseStrUsingRecursion(str) {
  if (!str) return "";

  return reverseStrUsingRecursion(str.substring(1)) + str.charAt(0);
}

console.log(reverseStrUsingRecursion("chandresh", 0));
