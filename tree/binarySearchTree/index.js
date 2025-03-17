class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    // 5
    while (true) {
      if (newNode.value === temp.value) {
        return this;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  //   Second method way more cleaner and more efficient
  includes(value) {
    let temp = this.root;

    while (temp !== null) {
      if (temp.value === value) return true;
      temp = value < temp.value ? temp.left : temp.right;
    }
    return false;
  }

  bfs() {
    if (this.root === null) {
      return undefined;
    }

    let current = this.root;
    let queue = [];
    let data = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return data;
  }

  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data;
    console.log("--------", data);

    data.push(node.value);
    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }

  //   bfs(value) {
  //     if (this.root === null) {
  //       return false;
  //     }

  //     let temp = this.root;
  //     while (temp) {
  //       if (value === temp.value) {
  //         return true;
  //       }

  //       if (value < temp.value) {
  //         if (temp.left === null) {
  //           return false;
  //         }
  //         if (value === temp.left.value) {
  //           return true;
  //         } else {
  //           temp = temp.left;
  //         }
  //       } else {
  //         if (temp.right === null) {
  //           return false;
  //         }

  //         if (value === temp.right.value) {
  //           return true;
  //         } else {
  //           temp = temp.right;
  //         }
  //       }
  //     }
  //     return false;
  //   }
}

const tree = new BST();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree);
console.log(tree.includes(9));
console.log(tree.bfs());
console.log(tree.dfsPreOrder());
