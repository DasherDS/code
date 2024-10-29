class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next; // 指向下一个节点
  }
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

function findMiddleNode(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

const res = findMiddleNode(node1)
console.log(res);

