/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  const dummy = new ListNode();
  let current = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 || list2;
  return dummy.next;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 * */
const reverseList = (head) => {
  let prve = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;
    current.next = prve;

    prve = current;
    current = nextTemp;
  }

  return prve;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let current = head;
  let nextCurrent = head.next;

  while (nextCurrent !== null) {
    if (current.val === nextCurrent.val) {
      current.next = nextCurrent.next;
    } else {
      current = nextCurrent;
    }
    nextCurrent = current.next;
  }

  return head;
};
