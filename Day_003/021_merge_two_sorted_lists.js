/*
LeetCode #21
Merge Two Sorted Lists

Merge two sorted linked lists and return it as a single sorted list.
The list should be made by splicing together the nodes of the first two lists.

Difficulty: Easy
Day: 003

https://leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  let l1 = list1;
  let l2 = list2;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 !== null ? l1 : l2;

  return dummy.next;
};

// Example 1
const list1a =
  new ListNode(1,
    new ListNode(2,
      new ListNode(4)));

const list1b =
  new ListNode(1,
    new ListNode(3,
      new ListNode(4)));

console.log(mergeTwoLists(list1a, list1b));
// 1 -> 1 -> 2 -> 3 -> 4 -> 4

// Example 2
const list2a = null;
const list2b = null;

console.log(mergeTwoLists(list2a, list2b));
// null

// Example 3
const list3a = null;

const list3b =
  new ListNode(0);

console.log(mergeTwoLists(list3a, list3b));
// 0 -> null
