# Trees

## Binary tree
Every kind of tree is Complete. It's as compact as you make it, given the number of nodes that you have. <br>
`Full tree` - every item points to 2 nodes or zero nodes. <br>
`Perfect tree` - every line has items in it. Always will be Full and Complete. <br>
Top item of tree - `parent`. That have children. Every child with the same parent calls `siblings`. You can not have 
more than a one parent in the tree. Every child may become a parent. </br>
Node that doesn't have any children called a `leaf`

## Binary Search Tree (BST)
With BST if `child > then parent`, this node will go to right, if `< then parent` to the left. When node is added to 
the tree algorithm always starts from the parent.
```
                47
             /      \
            21       76
           / \      /   \
         18   27   52    82
```
If inserted node = the existed node you can add count property into the node
```js
{
    value: 76, 
    left: null,
    right: null,
    count: 2
}
```
or your tree will always contain only unique values.
### BST Big O
No matter what you're doing with the tree: finding, adding, removing - number of steps always will be the same. We 
can call it `O(log n)`. </br>
Because of BTS structure, we can use divide and conquer approach with the tree. But if we will have a tree when each 
node will be bigger than parent:
```
47
  \
   76
     \
      82
        \
         91
```
it's `O(n)` and it looks like Linked List.

### Examples of trees in computing:
- File system
- Game dev
- DB
- Computer networking


