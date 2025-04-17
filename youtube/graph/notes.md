# 📊 Graph Data Structure in JavaScript

## 📌 What is a Graph?

A **Graph** is a non-linear data structure that models relationships between objects. It consist of:

- **Vertices (Nodes)**
  There represent the individual entities within the graph.
- **Edges (Connections between nodes)**
  These connection vertices, signifying a relationship or connection between them.

### Types of Graphs

- **Directed vs Undirected**
- **Weighted vs Unweighted**
- **Cyclic vs Acyclic**
- **Connected vs Disconnected**

Graphs are used in wide range of applications

1. Social networks: Graphs are used to model relationships between people in social networks such as Facebook, Twitter, and LinkedIn.
2. Routing algorithms: Graphs are used to model the connections between different nodes in a network, allowing for efficient routing of data.
3. Recommendation systems: Graphs are used to model the relationships between users and items, allowing for personalized recommendations based on user behavior.
4. Computer networks: Graphs are used to model the connections between devices in a network, allowing for efficient data transfer and network management.
5. GIS (Geographic Information Systems): Graphs are used to model the connections between locations in a map, allowing for efficient routing and analysis of spatial data.
6. Molecular biology: Graphs are used to model the relationships between molecules, allowing for analysis of biological data.
7. Knowledge representation: Graphs are used to model the relationships between concepts in a knowledge base, allowing for efficient query processing and reasoning.

---

## 🧱 Graph Representations

### 1. **Adjacency List** (Most Common)

### 2. **Adjacency Matrix**

```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"],
};
```
