/*
LeetCode #70
Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps.
Return the number of distinct ways to climb to the top.

Difficulty: Easy
Day: 008

https://leetcode.com/problems/climbing-stairs/
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) { return 1 }
  if (n === 2) { return 2 }

  let prev1 = 2
  let prev2 = 1

  for (let i = 3; i <= n; i++) {
    let current = prev1 + prev2

    prev2 = prev1
    prev1 = current
  }

  return prev1
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
