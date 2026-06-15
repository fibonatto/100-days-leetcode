/*
leetcode 13
Roman to Integer

Given a roman numeral, convert it to an integer.

difficulty: easy
day: 002

https://leetcode.com/problems/roman-to-integer/
*/

/**
 * Converts a Roman numeral string to an integer.
 * Supports values from I (1) to MMMCMXCIX (3999).
 *
 * @param {string} s - A valid Roman numeral string
 * @returns {number} The integer value, or 0 for invalid/empty input
 */

const ROMAN_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = (s) => {
  let result = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const current = ROMAN_VALUES[s[i]];

    result += current < prev ? -current : current;
    prev = current;
  }

  return result;
};

console.log(romanToInt("III"))      // 3
console.log(romanToInt("LVIII"))    // 58
console.log(romanToInt("MCMXCIV"))  // 1994
