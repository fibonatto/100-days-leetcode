/*
LeetCode #66
Plus One

You are given a large integer represented as an
integer array digits, where each digits[i] is the
ith digit of the integer.

Increment the large integer by one and return the
resulting array of digits.

Difficulty: Easy
Day: 006

https://leetcode.com/problems/plus-one/
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
  }

  return [1, ...digits];
};

console.log(plusOne([1, 2, 3]));    // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // [4, 3, 2, 2]
console.log(plusOne([9]));          // [1, 0]
console.log(plusOne([9, 9, 9]));    // [1, 0, 0, 0]
