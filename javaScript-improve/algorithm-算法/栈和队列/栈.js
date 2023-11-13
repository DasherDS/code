const arr = [];

// c++ 中取栈顶元素的方法叫做 top  java 中的方法叫做 peek

class Stack {
  constructor() {
    this.data = [];
  }

  pop() {
    return this.data.pop();
  }

  push(val) {
    this.data.push(val);
  }

  size() {
    return this.data.length;
  }

  isEmpty() {
    return this.data.length === 0;
  }

  top() {
    return this.data[this.data.length - 1];
  }

  peek() {
    return this.top();
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(9);
console.log(stack.top());
stack.pop()
console.log(stack.size());
