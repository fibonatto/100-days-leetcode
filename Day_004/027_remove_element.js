/*
LeetCode #27
Remove Element

Remove all occurrences of val in-place and return the number of remaining elements.

Difficulty: Easy
Day: 004

https://leetcode.com/problems/remove-element/
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

let a = [3, 2, 2, 3];
let b = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(a, 3)); // 2
console.log(a.slice(0, 2));       // [2, 2]

console.log(removeElement(b, 2)); // 5
console.log(b.slice(0, 5));       // [0, 1, 3, 0, 4]
