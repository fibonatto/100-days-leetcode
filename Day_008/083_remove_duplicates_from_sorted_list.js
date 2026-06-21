/*
LeetCode #83
Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates
such that each element appears only once.

Difficulty: Easy
Day: 008

https://leetcode.com/problems/remove-duplicates-from-sorted-list/
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let current = head

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }

  return head
}

// Example 1
const list1 =
  new ListNode(1,
    new ListNode(1,
      new ListNode(2)));

console.log(deleteDuplicates(list1));
// 1 -> 2

// Example 2
const list2 =
  new ListNode(1,
    new ListNode(1,
      new ListNode(2,
        new ListNode(3,
          new ListNode(3)))));

console.log(deleteDuplicates(list2));
// 1 -> 2 -> 3
