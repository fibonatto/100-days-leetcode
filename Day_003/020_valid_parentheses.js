/*
LeetCode #20
Valid Parentheses

Given a string s containing just the characters
'(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

Difficulty: Easy
Day: 003

https://leetcode.com/problems/valid-parentheses/
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(') {
      stack.push(')');
    } else if (char === '{') {
      stack.push('}');
    } else if (char === '[') {
      stack.push(']');
    } else if (stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("([])"));     // true
console.log(isValid("([)]"));     // false
