/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  console.log(str);

  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= 0 && str[i] <= 9) && (str[i] != " ")) {
      newStr.push(str[i]);
    }
  }

  console.log(newStr);



  let start = 0;
  let end = newStr.length - 1;
  while (start < end) {
    if (newStr[start] != newStr[end]) return false;

    start++;
    end--;
  }


  return true;
}
let ans = isPalindrome("Mr. Owl ate my metal worm.");
console.log(ans);
module.exports = isPalindrome;
