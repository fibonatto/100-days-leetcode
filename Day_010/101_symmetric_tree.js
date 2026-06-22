/*
LeetCode #101
Symmetric Tree

Given the root of a binary tree, check whether it is a mirror
of itself.

Difficulty: Easy
Day: 010

https://leetcode.com/problems/symmetric-tree/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true

  const isMirror = (left, right) => {
    if (left === null || right === null) return left === right
    if (left.val !== right.val) return false

    return isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
  }

  return isMirror(root.left, root.right)
}

// Example 1
const root1 =
  new TreeNode(1,
    new TreeNode(2,
      new TreeNode(3),
      new TreeNode(4)),
    new TreeNode(2,
      new TreeNode(4),
      new TreeNode(3)));

console.log(isSymmetric(root1));
// true

// Example 2
const root2 =
  new TreeNode(1,
    new TreeNode(2,
      null,
      new TreeNode(3)),
    new TreeNode(2,
      null,
      new TreeNode(3)));

console.log(isSymmetric(root2));
// false

// Example 3
const root3 =
  new TreeNode(1);

console.log(isSymmetric(root3));
// true
