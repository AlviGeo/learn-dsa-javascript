<b>Tree</b>
A DS Tree is a fundamental hierarchical data structure. It represents a collection of elements (data) called nodes, connected by edges (links) forming a tree-like structure.

Terms in a tree data structure in a simple way:

1. Node
   -> is a basic unit of a tree that contains some data and pointers (or references) to its children
2. Root
   -> is the topmost node of a tree. It is the starting point of the tree, and it has no parent.
3. Parent and Child
   -> A parent is a node that has one or more child nodes. A child is a node that has a parent.
4. Sibling
   -> Sibling nodes are nodes that share the same parent.
5. Leaf
   -> A leaf node is a node that has no children.
6. Degree
   -> Thre degree of a node is the number of children it has.
7. Depth and Height
   Depth of a node = Distance (number of edges) from the root to that node.
   Height of a node = The longest path (number of edges) from that node to a leaf.
8. Subtree
   -> is a tree formed by a node and all its descendants.
9. Binary Tree
   -> is a tree where each node has at most two children (left and right).
10. Binary Search Tree (BST)
    -> is a binary tree where: - Left child < Parent - Right child > Parent
    Usually in a opposite (reverse) BST it would have - Left child > Parent - Right child < Parent

Types of Binary Tree

1. Full Binary Tree
2. Complete Binary Tree
3. Perfect Binary Tree
4. Balanced Binary Tree
5. Degenerate (Skewed) Tree

Types of Binary Search Tree

1. Standard Binary Search Tree (BST)
2. Reverse (Opposite) BST

Two main categories of tree traversal methods

1. Breadth First Search (BFS)
   -> when the nodes on the same level are visited before going to the next level in the tree.
2. Depth First Search (DFS)
   -> when the traversal moves down the tree all the way to the leaf nodes, exploring the tree branch by branch in a downwards direction.

Three different types of DFS traversals

1. Pre-order -> is a type of Depth First Search, where each node is visited in a certain order.
2. In-order -> is a type of Depth First Search, where each node is visited in a certain order
3. Post-order -> is a type of Depth First Search, where each node is visited in a certain order

Link References
https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/
