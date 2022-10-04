function validAnagram(fString, sString) {
  /** Return false, if both string has different length */
  if (fString.length !== sString.length) {
    return false;
  }
  /** Count letter's frequencies of both strings */
  const frequnciesCounterOfFirstString = {};
  const frequnciesCounterOfSecondString = {};

  for (const str of fString) {
    frequnciesCounterOfFirstString[str] =
      (frequnciesCounterOfFirstString[str] || 0) + 1;
  }

  for (const str of sString) {
    frequnciesCounterOfSecondString[str] =
      (frequnciesCounterOfSecondString[str] || 0) + 1;
  }
  /** Return false if both strings haven't equal frequncies of letters */

  for (const key in frequnciesCounterOfFirstString) {
    if (
      frequnciesCounterOfSecondString[key] !==
      frequnciesCounterOfFirstString[key]
    ) {
      return false;
    }
  }

  /** Return True if both strings have equal frequncies of letters  */
  return true;
}

console.log("Blank strings=>>>>", validAnagram("", ""));
console.log("valid anagram=>>>>", validAnagram("abc", "cab"));
console.log("valid anagram=>>>>", validAnagram("asabc", "cabsa"));
console.log(
  "valid anagram=>>>>",
  validAnagram("texttwisttime", "timetwisttext")
);
console.log("invalid anagram=>>>>", validAnagram("aabc", "cab"));
console.log("invalid anagram=>>>>", validAnagram("abc", "asd"));
