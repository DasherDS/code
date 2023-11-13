class Queue1 {
  constructor() {
    this.items = [];
  }

  // 向队列末尾添加元素
  enqueue(element) {
    this.items.push(element);
  }

  // 从队列头部移除元素并返回
  dequeue() {
    if (this.isEmpty()) {
      return "队列已空";
    }
    return this.items.shift();
  }

  // 返回队列头部的元素，但不移除
  front() {
    if (this.isEmpty()) {
      return "队列为空";
    }
    return this.items[0];
  }

  // 检查队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列中元素的个数
  size() {
    return this.items.length;
  }

  // 清空队列
  clear() {
    this.items = [];
  }

  // 打印队列中的元素
  print() {
    console.log(this.items.join(" "));
  }
}

class Queue2 {
  constructor() {
    this.head = null; // 队列头部指针
    this.tail = null; // 队列尾部指针
    this.length = 0; // 队列长度
  }

  // 向队列末尾添加元素
  enqueue(element) {
    const newNode = { value: element, next: null };
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // 从队列头部移除元素并返回
  dequeue() {
    if (this.isEmpty()) {
      return "队列已空";
    }
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode.value;
  }

  // 返回队列头部的元素，但不移除
  front() {
    if (this.isEmpty()) {
      return "队列为空";
    }
    return this.head.value;
  }

  // 检查队列是否为空
  isEmpty() {
    return this.length === 0;
  }

  // 返回队列中元素的个数
  size() {
    return this.length;
  }

  // 清空队列
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 打印队列中的元素
  print() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(" "));
  }
}

const q1 = new Queue1();
const q2 = new Queue2();

q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);

console.log("队列元素:");
q1.print(); // 输出 "1 2 3"

console.log("队列头部元素:", q1.front()); // 输出 "1"
console.log("队列大小:", q1.size()); // 输出 "3"

console.log("移除队列头部元素:", q1.dequeue()); // 输出 "1"
console.log("队列元素:");
q1.print(); // 输出 "2 3"

console.log("*************");
q2.enqueue(1);
q2.enqueue(2);
q2.enqueue(3);

console.log("队列元素:");
q2.print(); // 输出 "1 2 3"

console.log("队列头部元素:", q2.front()); // 输出 "1"
console.log("队列大小:", q2.size()); // 输出 "3"

console.log("移除队列头部元素:", q2.dequeue()); // 输出 "1"
console.log("队列元素:");
q2.print(); // 输出 "2 3"
