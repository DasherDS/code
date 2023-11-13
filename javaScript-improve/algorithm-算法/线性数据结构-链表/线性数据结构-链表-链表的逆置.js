/**
 *
 * @root 根节点
 * 分析：
 *    1 -> 2 -> 3 -> 4 -> 5 -> null
 *    5 -> 4 -> 3 -> 2 -> 1 -> null
 *
 *    next 是  指向(->)
 *
 *    第一项开始 让它后一项的next执行自己本身  (后一项的next = 当前项.next.next)
 *    当到倒数第二项的时候 后一项的next 为null  终止条件  特殊处理
 */

const inversion = (root) => {
  if (!root) return;
  if (root.next.next === null) {
    root.next.next = root;
    return root.next;
  } else {
    const reslut = inversion(root.next);
    root.next.next = root;
    root.next = null;
    return reslut;
  }
};

const aa = JSON.parse(JSON.stringify(a));
const data = inversion(aa);
console.log(data);
