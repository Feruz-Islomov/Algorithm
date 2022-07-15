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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend();
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }
  print() {
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += `${current.value} `;
      current = current.next;
    }
    console.log(listValues);
  }
}

const linkedlist = new LinkedList();
linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.prepend(5);
linkedlist.append(40);
linkedlist.insert(333, 3);
console.log(linkedlist.print());
linkedlist.removeFrom(3);

console.log(linkedlist.print());
linkedlist.removeValue(30);
console.log(linkedlist.print());
console.log(linkedlist.search(40));

//empty
// prepend(1){
//   const node = {this.value = 1, this.next = null}
//   this.head = {this.value = 1, this.next = null}
// }

// natijada {this.head = {this.value = 1, this.next = null}, this.size = 1 }

/////////////////////////////////////////////////////////////////////////////////

//not empty
// prepend(2){
//    const node = {this.value = 2, this.next = null}
//    node.next =  {this.value = 1, this.next = null} this.head
//    this.head =  {this.value = 2, this.next = null} node
// }

// cosnt list = {
//   this.head = {
//                this.value = 2,
//                this.next = {
//                             this.value = 1,
//                             this.next = null
//                            }
//               },
//   this.size = 2
// }
