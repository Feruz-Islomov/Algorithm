const LinkedList = require("./linkedList");

class LinkedlistStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFront();
  }

  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
// const stack = new LinkedlistStack();
// console.log(stack.isEmpty());
// stack.push(20);
// stack.push(30);
// stack.push(40);
// console.log(stack.getSize());
// stack.print();

// console.log(stack.pop());
// console.log(stack.peek());

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFront();
  }
  peek() {
    return this.list.head.value;
  }
  getSize() {
    return this.list.getSize();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  print() {
    this.list.print();
  }
}

// const queue = new LinkedListQueue();
// console.log(queue.isEmpty());
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// console.log(queue.getSize());
// queue.print();

// console.log(queue.dequeue());
// queue.print();

// console.log(queue.peek());
