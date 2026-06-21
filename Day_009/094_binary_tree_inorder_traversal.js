/*
LeetCode #94
Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal
of its nodes' values.

Difficulty: Easy
Day: 009

https://leetcode.com/problems/binary-tree-inorder-traversal/
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const acc = []

  function dfs(node) {
    if (node === null) return

    dfs(node.left)
    acc.push(node.val)
    dfs(node.right)
  }

  dfs(root)

  return acc
}

const root1 =
  new TreeNode(1,
    null,
    new TreeNode(2,
      new TreeNode(3)));

console.log(inorderTraversal(root1));
// [1, 3, 2]

const root2 =
  new TreeNode(1,
    new TreeNode(2,
      new TreeNode(4),
      new TreeNode(5)),
    new TreeNode(3));

console.log(inorderTraversal(root2));
// [4, 2, 5, 1, 3]
