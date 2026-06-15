/*
leetcode 14
longest common prefix

return the longest common prefix string amongst an array of strings.

difficulty: easy
day: 002

https://leetcode.com/problems/longest-common-prefix/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] != char) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

let a = ["flower", "flow", "flight"];
let b = ["dog", "racecar", "car"];


console.log(longestCommonPrefix(a));
console.log(longestCommonPrefix(b));

