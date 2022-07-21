class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  removeFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let cur = this.head;
      while (cur.next !== this.tail) {
        cur = cur.next;
      }
      cur.next = null;
      this.tail = cur;
    }
    this.size--;
    return value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("the list is Empty!");
    } else {
      let list = "";
      let cur = this.head;
      while (cur) {
        list += `${cur.value} `;
        cur = cur.next;
      }
      console.log(list);
    }
  }
}
// const linkedlist = new LinkedList();
// linkedlist.prepend(30);
// linkedlist.prepend(40);
// linkedlist.prepend(50);
// linkedlist.append(60);
// linkedlist.append(70);
// linkedlist.removeFront();
// linkedlist.removeFromEnd();
// console.log(linkedlist.print());

module.exports = LinkedList;
