/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const processedStr = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  let i = 0;
  let j = processedStr.length - 1;

  while (i <= j) {
    if (processedStr[i] !== processedStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
