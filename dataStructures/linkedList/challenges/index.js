// Challenge: Reverse Single Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next; // Save next node before modifying
      temp.next = prev; // Reverse next pointer
      prev = temp; // Move prev forward
      temp = next; // Move temp forward
    }
    return this;
  }
}

const linkedList = new LinkedList(2);
linkedList.push(3);
linkedList.push(4);
console.log(linkedList.reverse());
