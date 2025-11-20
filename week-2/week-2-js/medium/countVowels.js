/*
  Implement a function `countVowels` that takes a ans as an argument and returns the number of vowels in the ans.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let ans = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] == 'a' || ans[i] == 'e' || ans[i] == 'i' || ans[i] == 'o' || ans[i] == 'u') count++;
  }


  return count;
}



module.exports = countVowels;