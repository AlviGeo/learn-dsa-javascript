class Node {
  constructor(value) {
    this.value = value; // Renamed from head to value
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0 || !this.head) {
      return undefined;
    }

    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0 || !this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    let oldHead = this.head;

    if (this.length === 0 || !this.head) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // oldhead = 1
      console.log(oldHead);

      this.head = oldHead.next;
      this.head.prev = null;
    }

    this.length--;
    return this;
  }
}

const doublyLinkedList = new DoublyLinkedList(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
// console.log(doublyLinkedList.pop());
// console.log(doublyLinkedList.unshift(10));
console.log(doublyLinkedList.shift());
// doublyLinkedList.shift();
