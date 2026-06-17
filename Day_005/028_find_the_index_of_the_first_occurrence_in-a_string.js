/*
LeetCode #28
Find the Index of the First Occurrence in a String

Given two strings needle and haystack, return the index of the
first occurrence of needle in haystack, or -1 if needle is not
part of haystack.

Difficulty: Easy
Day: 005

https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));   // 0
console.log(strStr("leetcode", "leeto"));  // -1
