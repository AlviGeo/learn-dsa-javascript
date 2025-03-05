class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value = 1) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (value === undefined) {
      return undefined;
    } else if (this.length === 0 || !this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    const temp = this.first;

    if (this.length === 0 || !this.first) {
      return undefined;
    } else {
      this.first = temp.next;
      temp.next = null;
    }

    this.length--;
    return this;
  }
}

let stack = new Stack(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
