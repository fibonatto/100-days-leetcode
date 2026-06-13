/*
LeetCode #9
Palindrome Number

Return true if x is a palindrome, and false otherwise.

Difficulty: Easy
Day: 001

https://leetcode.com/problems/palindrome-number
*/


/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;

  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedHalf ||
    x === Math.floor(reversedHalf / 10);
};

console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
