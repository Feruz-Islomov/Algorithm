class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.print());

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(23);
queue.enqueue(3);
queue.dequeue();
// console.log(queue.print());

// OPTIMIZED QUEUE WITH OBJECT

class OptimizedQueue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const optimalqueue = new OptimizedQueue();
optimalqueue.enqueue("1r");
optimalqueue.enqueue("2t");
optimalqueue.enqueue("3y");
optimalqueue.enqueue("4r");
optimalqueue.dequeue();
optimalqueue.dequeue();
optimalqueue.dequeue();
optimalqueue.dequeue();

optimalqueue.enqueue("3y");
optimalqueue.enqueue("4r");
// console.log(optimalqueue.print());
