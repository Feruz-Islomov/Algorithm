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
