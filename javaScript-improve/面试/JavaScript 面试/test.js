const list = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

function solution(list) {
  const map = new Map();
  const tree = [];

  list.forEach((item) => {
    map.set(item.id, { ...item, children: [] });
  });

  list.forEach((item) => {
    if (item.pid === 0) {
      tree.push(item);
    } else {
      map.get(item.pid).children.push(map.get(item.id));
    }
  });

  return tree;
}

const res = solution(list);
