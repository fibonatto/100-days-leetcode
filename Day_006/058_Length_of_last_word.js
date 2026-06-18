/*
LeetCode #58
Length of Last Word

Given a string s consisting of words and spaces,
return the length of the last word in the string.

A word is a maximal substring consisting of
non-space characters only.

Difficulty: Easy
Day: 006

https://leetcode.com/problems/length-of-last-word/
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let i = s.length - 1;

  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  let len = 0;

  while (i >= 0 && s[i] !== ' ') {
    len++;
    i--;
  }

  return len;
};

console.log(lengthOfLastWord("Hello World"));                 // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy"));       // 6
