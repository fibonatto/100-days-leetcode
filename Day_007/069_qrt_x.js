/*
LeetCode #69
Sqrt(x)

Given a non-negative integer x,
return the square root of x rounded down to the nearest integer.

The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

Difficulty: Easy
Day: 007

https://leetcode.com/problems/sqrtx/
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let answer = 0;

  while (left <= right) {
    const mid = (left + right) >> 1;

    if (mid <= Math.floor(x / mid)) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(0)); // 0
console.log(mySqrt(1)); // 1
console.log(mySqrt(2147395599)); // 46339
