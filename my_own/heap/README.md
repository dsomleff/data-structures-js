# Heap (priority queue)

It's a binary tree where every child and grand child is smaller (MaxHeap) or larger(MinHeap) than the current node.
- Whenever a node is added we adjust the Heap
- Whenever a node id deleted we adjust the Heap
- You could traverse the Heap (breadth first ordering), but you don't do it. 
- Heap maintain week ordering and usually full or complete tree.
- MinHeap - root is the minimum item
- MaxHeap - root is the maximum item.
- Typically, Heap do not support update Node logic, but it's possible.
```
             50 -> MinHeap: every node bellow must be >= 
            /   \
          71    100
         /  \   / \
       101  80 200 101  
```
```
             50 -> MaxHeap: every node bellow must be <= 
            /   \
          25    48
         /  \   / \
       19    2 20 11  
```
