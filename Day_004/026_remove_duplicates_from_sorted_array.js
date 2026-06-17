/*
LeetCode #26
Remove Duplicates from Sorted Array

Remove duplicates in-place from a sorted array and return the number of unique elements.

Difficulty: Easy
Day: 004

https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
};

let a = [1, 1, 2];
let b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(a)); // 2
console.log(a.slice(0, 2));       // [1, 2]

console.log(removeDuplicates(b)); // 5
console.log(b.slice(0, 5));       // [0, 1, 2, 3, 4]
