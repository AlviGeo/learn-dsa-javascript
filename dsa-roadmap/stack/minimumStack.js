class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MinStack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      return newNode;
    }

    newNode.next = this.first;
    this.first = newNode;
    this.length++;

    return this;
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.length === 0) return undefined;
    const temp = this.first;

    if (this.length === 1) {
      this.first = null;
    } else {
      this.first = temp.next;
    }

    this.length--;
    return temp;
  }

  /**
   * @return {number}
   */
  top() {
    if (this.length === 0) return undefined;
    return this.first.value;
  }

  /**
   * @return {number}
   */
  getMin() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    let result = temp.value;

    while (temp) {
      if (temp.value < result) {
        result = temp.value;
      }
      temp = temp.next;
    }

    return result;
  }
}

// const stack = new MinStack(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.pop();
// stack.top();
// console.log(stack.getMin());
// console.log(stack);

// Leetcode:
// Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]
// Output: [null,null,null,null,0,null,2,1]
