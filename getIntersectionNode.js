/**
 * 相交链表
 * */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  const arrA = [];
  let currentA = headA;

  while (currentA) {
    arrA.push(currentA);
    currentA = currentA.next;
  }

  let currentB = headB;
  while (currentB) {
    const indexA = arrA.findIndex((item) => item === currentB);
    if (indexA !== -1) {
      return currentB;
    }

    currentB = currentB.next;
  }

  return null;
};
