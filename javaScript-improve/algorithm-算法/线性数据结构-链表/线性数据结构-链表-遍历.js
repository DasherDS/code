/**
 * 循环的方式去遍历
 * @root 根节点
 */
const whileErgodic = (root) => {
  let temp = root;
  while (true) {
    if (temp != null) {
      console.log("whileErgodic", temp);
    } else {
      break;
    }
    temp = temp.next;
  }
};

whileErgodic(a);

/**
 * 递归遍历
 * @root 根节点
 */
const recursionErgodic = (root) => {
  if (!root) return;
  console.log("recursionErgodic", root);
  recursionErgodic(root.next);
};

recursionErgodic(a);
