# Graphs
```
         82   
        / |  
      /   |
    44----76
```
This is the graph. `44, 82, 76` called a **Vertex** or **Node**. They are connected and these connections called 
**Edge** or **Connection**. <br>
<br>
`82` may be connected to `44` or `76` or both. There is no limitations. <br>
<br>
We can weight **Edges** like this:
```
        82   
     2 /  | 15 
      /   |
    44----76
        3
```
Short path from `76` to `82` will be through `44` because summary of the edges is < then 15. <br>
<br>
Edges can be bidirectional on single directed.
```
you <-----> friend
```
```
you ----->celebrity 
```
Tree is a type of graph with some limitations.
As well as linked list.

### Ways to store a graph
[Adjacency Matrix](https://www.programiz.com/dsa/graph-adjacency-matrix) <br>
[Adjacency List](https://www.programiz.com/dsa/graph-adjacency-list)
```
           A                
       /       \
      E         B
      \         /
        D ---  C        
```
```js
{
    A: ['E', 'B'],
    B: ['A', 'C'],
    C: ['B', 'D'],
    D: ['C', 'E'],
    E: ['D', 'A'],
}
```
Space and time complexity for AM is inefficient in comparison with AL.  <br>
Insert action for both matrix is the same - `O(1)`. <br>
Remove Connection with AM is `O(1)`. For AL is more complex.<br>
Remove Edge action is slightly better for AL then for AM. <br>

### Usage of Graph
- Mapping system is using graph. It is useful to find out which is an excellent place from the location as well as your 
nearby location. In GPS we also use graphs.
- Facebook uses graphs. Using graphs suggests mutual friends. it shows a list of the f following pages, friends, and 
  contact list.
- 





