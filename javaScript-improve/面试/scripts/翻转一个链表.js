class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function solution(head) {
  if (!head) {
    return head;
  }

  let pre = null;
  let cur = head;

  while (cur) {
    const { next } = cur;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const res = solution(node1);
console.log(res);

