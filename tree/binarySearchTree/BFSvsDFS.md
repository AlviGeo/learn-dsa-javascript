# DFS vs BFS (Depth-First Search vs Breadth-First Search)

## 1️⃣ Overview

DFS and BFS are two fundamental graph/tree traversal algorithms. They explore nodes in different orders and are used for different purposes.

| Algorithm                      | Traversal Strategy                           | Data Structure Used           | Space Complexity          | Best Use Cases                                            |
| ------------------------------ | -------------------------------------------- | ----------------------------- | ------------------------- | --------------------------------------------------------- |
| **DFS (Depth-First Search)**   | Goes as deep as possible before backtracking | Stack (recursive or explicit) | O(h) (tree), O(V) (graph) | Pathfinding, cycle detection, solving mazes               |
| **BFS (Breadth-First Search)** | Explores neighbors level by level            | Queue (FIFO)                  | O(W) (tree), O(V) (graph) | Shortest path, connected components, network broadcasting |

---

## 2️⃣ DFS (Depth-First Search)

### 📌 How It Works

- DFS explores a node and goes as deep as possible before backtracking.
- It can be implemented **recursively** (using function calls) or **iteratively** (using a stack).

### 📌 Algorithm (Recursive)

```js
function dfs(node, visited = new Set()) {
  if (!node || visited.has(node)) return;
  visited.add(node);

  for (let neighbor of node.neighbors) {
    dfs(neighbor, visited);
  }
}
```

### 📌 Algorithm (Iterative - Using Stack)

```js
function dfsIterative(start) {
  let stack = [start];
  let visited = new Set();

  while (stack.length) {
    let node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor of node.neighbors) {
        stack.push(neighbor);
      }
    }
  }
}
```
