class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // the function is similar to push method
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0 || !this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // the function is similar to pop method
  dequeue() {
    if (this.length === 0) return undefined;

    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;

    this.length--;
    return this;

    // if (this.length === 1) {
    //   this.first = null;
    // } else {
    //   while (temp) {
    //     console.log(temp);
    //     if (temp.next == null) {
    //       return;
    //     }
    //     temp = temp.next;
    //   }
    // }
  }
}

const queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
