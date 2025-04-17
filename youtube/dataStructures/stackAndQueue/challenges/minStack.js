class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      this.length++;
    }

    return this;
  }

  minimum() {
    if (this.length === 0) return undefined;
    let minValue = this.first.value;
    let current = this.first;
    console.log(current);

    while (current) {
      if (current.value < minValue) minValue = current.value;
      current = current.next;
    }
    return minValue;
  }
}

const stack = new Stack(5);
stack.push(3);
stack.push(7);
stack.push(1);
stack.push(5);
// stack.minimum();
console.log(stack.minimum());

if (this.length === 0) {
  return undefined;
}
