// 定义树节点结构
class TreeNode {
  constructor(id, children = []) {
    this.id = id;
    this.children = children;
  }
}

// 实现树的 Diff 算法
function updateTree(oldTree, newTree) {
  // 如果跟节点id不同，直接替换整个树
  if (oldTree.id !== newTree.id) {
    return newTree;
  }

  //   如果跟节点相同则更新 children
  oldTree.children = diffChildren(oldTree.children, newTree.children);

  return oldTree;
}

// 比较更新子节点
function diffChildren(oldChildren, newChildren) {
  const oldMap = mapById(oldChildren);
  const newMap = mapById(newChildren);

  const updateChildren = [];

  //   更新或添加新节点
  for (let i = 0; i < newChildren.length; i++) {
    const newChild = newChildren[i];
    const oldChild = oldMap.get(newChild.id);

    if (oldChild) {
      // 存在相同的节点，进行递归更新
      updateChildren.push(updateTree(oldChild, newChild));
      //   检查节点是否移动
      if (oldChildren.indexOf(oldChild) !== i) {
        console.log(` id 为${oldChild.id} 的节点移动了`);
      }
      oldMap.delete(newChild.id); // 标记该节点已处理
    } else {
      // 新节点，直接添加
      updateChildren.push(newChild);
      console.log(`添加了 id 为${newChild.id} 的节点`);
    }
  }

  //   处理删除的节点
  oldMap.forEach((oldChild) => {
    // 删除剩下的 oldChild
    console.log(`删除了 id 为${oldChild.id} 的节点`);
  });

  return updateChildren;
}

// 将节点数组转换为 以id为键的 Map
function mapById(children) {
  const map = new Map();
  children.forEach((child) => {
    map.set(child.id, child);
  });
  return map;
}

// 测试用例
const oldTree = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
  new TreeNode(3),
]);

const newTree = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(4), new TreeNode(6)]), // 新增了 6，删除了 5
  new TreeNode(3),
]);

console.log("Updated Tree:", updateTree(oldTree, newTree));
