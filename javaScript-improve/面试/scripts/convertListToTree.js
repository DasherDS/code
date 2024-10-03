const list = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
  },
  {
    id: 2,
    name: "部门2",
    pid: 1,
  },
  {
    id: 3,
    name: "部门3",
    pid: 1,
  },
  {
    id: 4,
    name: "部门4",
    pid: 3,
  },
  {
    id: 5,
    name: "部门5",
    pid: 4,
  },
];

function convertToTree(list) {
  const map = {};
  const tree = [];

  // 将每个对象存储到以id为键盘的映射中
  list.forEach((item, index) => {
    map[item.id] = { ...item, children: [] };
  });

  list.forEach((item) => {
    if (item.pid === 0) {
      tree.push(map[item.id]);
    } else {
      map[item.pid].children.push(map[item.id]);
    }
  });

  return tree;
}

const res = convertToTree(list);

console.log(res);
