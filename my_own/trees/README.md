# Tree (Binary Search Tree)
- Amazing for Searching
- Can be full, Perfect and Balanced.
- Usage: Dictionary, Phone Books, Users (with numerical IDs)
- [Here is more](https://github.com/dsomleff/data-structures-js/blob/main/courses/trees/README.md)

### Depth First Traversal
Simple tree 
```
        1
       / \
      2   3
```
- Inorder (L, Root, R): 213
- Preorder (Root, L, R):  123 - good for copying BT
- Postorder (L, R. Root):  231 - used for deletion algorythm

P.S. Combine Root and Pre/Post to remember  it: Pre -> Root 1st; Post -> Root last

# DFS & BFS Searches

### DFS
- Depth First Search - Going to the end of the tree to the higher height (all the way to the left until no
  children node would have). As deep as possible , so that's why it's a DFS.
- It works like a stack structure.
- Save the shape of a tree

### BFS
- Breadth First Search - Going on each of the level of a tree.
- It works like a queue structure.
- NOT save the shape of a tree.

# BST Runtime
O (log n) - Find, Insert, Delete
