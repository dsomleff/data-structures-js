# Tree Traversal

### Depth First Traversal
Simple tree 
```
        1
       / \
      2   3
```
- Inorder (L, Root, R): 213
- Preorder (Root, L, R):  123
- Postorder (L, R. Root):  231

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

