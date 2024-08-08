/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  const arr = [];
  let current = head.next;

  while (current) {
    if (arr.includes(current)) {
      return true;
    }
    arr.push(current);
    current = current.next;
  }

  return false;
};
