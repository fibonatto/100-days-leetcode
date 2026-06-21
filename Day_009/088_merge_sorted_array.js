/*
LeetCode #88
Merge Sorted Array

Given two integer arrays nums1 and nums2, sorted in non-decreasing order,
and two integers m and n representing the number of elements in nums1 and
nums2 respectively, merge nums2 into nums1 as one sorted array.

Difficulty: Easy
Day: 009

https://leetcode.com/problems/merge-sorted-array/
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = m + n - 1

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]
      p1--
    } else {
      nums1[p] = nums2[p2]
      p2--
    }

    p--
  }
}

const nums1a = [1, 2, 3, 0, 0, 0]
const m1 = 3
const nums2a = [2, 5, 6]
const n1 = 3

merge(nums1a, m1, nums2a, n1);

console.log(nums1a);
// [1, 2, 2, 3, 5, 6]

const nums1b = [1]
const m2 = 1
const nums2b = []
const n2 = 0

merge(nums1b, m2, nums2b, n2);

console.log(nums1b);
// [1]
