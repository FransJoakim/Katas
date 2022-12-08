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
var mergeTwoLists = function (l1Node, l2Node) {
  function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  const logList = (name, list) => {
    const arr = [];
    while (list) {
      console.log(list);
      arr.push(list.val);
      list = list.next;
    }
  };

  const setNodeAndNudge = (n) => {
    newList.next = new ListNode();
    newList = newList.next;
    newList.val = n;
  };

  let dummyHead = new ListNode();
  let newList = dummyHead;

  while (l1Node !== null || l2Node !== null) {
    if (!l2Node) {
      setNodeAndNudge(l1Node.val);
      l1Node = l1Node.next;
    } else if (!l1Node) {
      setNodeAndNudge(l2Node.val);
      l2Node = l2Node.next;
    } else if (l1Node.val <= l2Node.val) {
      setNodeAndNudge(l1Node.val);
      l1Node = l1Node.next;
    } else {
      setNodeAndNudge(l2Node.val);
      l2Node = l2Node.next;
    }
  }
  return dummyHead.next;
};
