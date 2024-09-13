/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1arr = str1.toLowerCase().split("").sort().join("");
  let str2arr = str2.toLowerCase().split("").sort().join("");
  console.log(str1arr + " " + str2arr);
  if (str1arr === str2arr) {
    return true;
  }

  return false;
}
module.exports = isAnagram;
