### React DOM Diff 算法

React的虚拟DOM diff 算法是一种用于比较新旧虚拟DOM树差异的算法，目标是找出需要更新的部分，并生成一个最小化的DOM操作序列：

1. **比较根节点**：算法首先比较新旧虚拟DOM树的根节点。如果它们的类型不同，那么React会完全替换旧的DOM树，如果它们的类型相同，那么算法会继续比较它们的属性和子节点。
2. **比较属性**：算法会比较新旧虚拟DOM树的属性，判断是否有属性发生了变化。如果有属性发生变化，React会更新对应的DOM节点上的属性。
3. **比较子节点**：算法会递归地比较新旧虚拟DOM树的子节点。如果子节点的数量不同，那么React会更新对应的DOM节点的子节点。如果子节点的数量相同，那么算法会继续比较它们的类型和内容。
4. **递归比较**：算法会递归地比较新旧虚拟DOM树的子节点，如果子节点的类型相同，那么算法会继续比较它们的属性和子节点。如果子节点的类型不同，那么React会完全替换旧DOM节点。
5. **生成DOM操作序列**：通过比较新旧虚拟DOM树，算法会生成一个最小的DOM操作序列，包括插入、更新和删除操作。React会将这些操作批量执行，从而减少实际的DOM操作次数。