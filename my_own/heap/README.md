# Heap (Binary Heap, Priority Queue)

It's a binary tree where every child and grand child is smaller (MaxHeap) or larger(MinHeap) than the current node.
- Whenever a node is added we adjust the Heap
- Whenever a node id deleted we adjust the Heap
- You could traverse the Heap (breadth first ordering), but you don't do it. 
- Heap maintain week ordering and usually full or complete tree.
- MinHeap - root is the minimum item
- MaxHeap - root is the maximum item.
- Duplicates are ok in Heap.
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
- Implemented without Node class, but simply as an array
- Usage: (surprise) to prioritise things, Kernel process schedule e.g.
- Efficiency: 
  - we do all work in one place(array) without any additional pointers. Which is good for performance.
  - Extract (delete, pop) node : O(n)
  - All Heapify operations : O(log n)
- If its not priority queue, it's a trie. Or try trees / prefix / digital tree. Auto-completion algorithm. 
