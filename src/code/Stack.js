class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  peek() {
    return this.items[this.top];
  }

  push(value) {
    this.items[++this.top] = value;
  }

  pop() {
    return this.items[this.top--];
  }
}

export default Stack;
