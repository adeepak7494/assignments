/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const testString = str.toLowerCase();
  let testString1 = "";
  let testString2 = "";
  const index = testString.length - 1;
  let regex = /^[a-zA-Z]+$/;
  for (let i = index; index >= 0; i--) {
    if (regex.test(testString[index - i])) {
      testString1 = testString1 + testString[index - i];
    }
    if (regex.test(testString[index])) {
      testString2 = testString2 + testString[index];
    }
  }
  return testString1 == testString2;
}

module.exports = isPalindrome;
