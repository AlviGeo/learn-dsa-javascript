class Node {
  constructor(value) {
    this.head = value;
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

  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    // Point the first node
    let temp = this.head;
    // Move the head to next node
    this.head = this.head.next;

    // Remove first element
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }

  getLast() {
    if (this.head) {
      return undefined;
    }

    let temp = this.head;
    while (temp) {
      if (!temp.next) {
        return temp;
      }
    }

    temp = temp.next;
  }

  getNodeByNumber(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }
    return null;
  }

  // First method to update
  updateNodeByNumber(index, updatedNumber) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        temp.head = updatedNumber;
        return temp;
      }

      counter++;
      temp = temp.next;
    }
    return null;
  }

  // Second method to update the number based on the index from tutorial
  set(index, value) {
    let temp = this.getNodeByNumber(index);

    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(targetIndex, value) {
    if (targetIndex === 0) {
      return this.unshift(value);
    }

    if (targetIndex === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    // Uses the get method to find the node right before the desired position (index - 1)
    const temp = this.getNodeByNumber(targetIndex - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  size() {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  clear() {
    return (this.head = null);
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
// myLinkedList.pop();
// myLinkedList.unshift(0);
// myLinkedList.shift();
// console.log(myLinkedList.getLast());
// console.log(myLinkedList.getNodeByNumber(2));

console.log(myLinkedList.getNodeByNumber(3));
// console.log(myLinkedList.updateNodeByNumber(2, 10));
// console.log(myLinkedList.set(3, 10));
console.log(myLinkedList.insert(2, 20));
console.log(myLinkedList.clear());

// illustration of how node data works
// Node {
//   head {
//       head = 1,
//       next = {
//           head = 10,
//           next = {
//               head = 2,
//               next = {
//                   head = 3,
//                   next = null,
//               }
//           }

//       }
//   }
// }

// {
//   head: {
//     value: 1,
//     next: null
//   },
//   tail: {
//     value: 1,
//     next: null
//   },
//   length: 1
// }

// {
//   head: {
//     value: 1,
//     next: {
//       value: 10,
//       next: null
//     }
//   },
//   tail: {
//     value: 10,
//     next: null
//   },
//   length: 2
// }
