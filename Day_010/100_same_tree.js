/*
LeetCode #100
Same Tree

Given the roots of two binary trees p and q, write a function
to check if they are the same or not.

Two binary trees are considered the same if they are structurally
identical, and the nodes have the same value.

Difficulty: Easy
Day: 010

https://leetcode.com/problems/same-tree/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null || q === null) return p === q
  if (p.val !== q.val) return false

  return isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
}

// Example 1
const p1 =
  new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3));

const q1 =
  new TreeNode(1,
    new TreeNode(2),
    new TreeNode(3));

console.log(isSameTree(p1, q1));
// true

// Example 2
const p2 =
  new TreeNode(1,
    new TreeNode(2));

const q2 =
  new TreeNode(1,
    null,
    new TreeNode(2));

console.log(isSameTree(p2, q2));
// false

// Example 3
const p3 =
  new TreeNode(1,
    new TreeNode(2),
    new TreeNode(1));

const q3 =
  new TreeNode(1,
    new TreeNode(1),
    new TreeNode(2));

console.log(isSameTree(p3, q3));
// false
