class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastHead = this.head;
    if (lastHead) {
      while (lastHead.next) {
        lastHead = lastHead.next;
      }
    }
    return lastHead;
  }

  getFirst() {
    let firstNode = this.head;
    if (!firstNode) {
      return undefined;
    }
    return this.head;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = new LinkedList(node1);
console.log(list.head.next.data);
console.log(node1);
console.log(node2);
console.log(list.size());
