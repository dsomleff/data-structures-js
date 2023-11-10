# Graphs

### Implementation Terms
- node: a point or vertex on the graph
- edge: the connection between two nodes. Could be directed (one way flow) and undirected (both directions).
- weight: relative coast moving alone an edge from one node to another
---

### Graph Data Structure
> **Edge List**<br>
> 
Take every edge of a graph and represent it as an array of 2 elements
```js
const edgeListDirfected = [
    [0, 1],
    [1, 2],
    [3, 1],
    [3, 2]
];

const edgeListUndirfected = [
    [0, 1], [1, 0],
    [1, 2], [2, 1],
    [3, 1], [1, 3],
    [3, 2], [2, 3]
]; // doubled number of edges and flip the directions 

```
Order not matter. If we need to find specific edge - we need to go through all edgeList, which is `O(n)`. </br>

>**Adjacency Matrix** <br>

Take every edge in the graph and represented it as a one in
a two by two matrices.
```js
const adjacencyMatrixDirected = [
    [, , 1, , , ],
    [, , , 1, , ],
    [, , , 1, 1, ],
    [, , , , , 1]
    [, , , , , 1]
    [, , , , , ]
];

const adjacencyMatrixUndirected = [
    [, , 1, , , ], 
    [, , , 1, , ], 
    [1, , , 1, 1, ], 
    [, 1, 1, , , 1]
    [, , 1, , , 1] 
    [, , , 1, 1, ,]
];
// if drew diogonal from upper left cornir to right down corner numbers must be mirrored
```
It's fast `O(1)`. But not the most space efficient approach. Not many edges = too many zeros, which is a waste of space. 
</br>

>**Adjacency List** <br>

Combines simplicity of Edge List and speed of Adjacency Matrix. We take each vertex and simply write down each of its neighbors as a list in an array.
```js
const adjListDirected = {
    0: [2],
    1: [3],
    2: [3, 4],
    3: [5],
    4: [5],
    5: []
};

const adjListUndirected = {
    0: [2],
    1: [3],
    2: [0, 3, 4],
    3: [1, 2, 5],
    4: [2, 5],
    5: [3, 4]
}
```

---

### Big O
BigO is commonly stated in terms of V and E where V stands for vertices and E stands for edges. <br/>

So O(V * E) means that we will check every vertex, and on every vertex we check every edge

---
### How are graphs represented
- adj list: list of edges, connections to the nodes. Usually they have 
```js
[{to: node_to_which_connected, weight: number}]
```
- adj matrix: list of nodes that looks like, memory consuming `O (v)2`

---
### Basic Searches
BFS and DFS still exist on a graph, and they are virtually no different from the tree. <br>
- Better for near the top. Find neighbours. 
- Uses queue
- FB, Linkedin. <br><br>
BFS uses a queue and DFS uses stack.<br>
- Better find things far away
- Uses stack
- Chess game


---
### Dijkstra's Shortest Path
 - it is calculating the shortest path from one node to all other nodes in the graph. Which means we can also 
 specifically find it to an individual node as well. Because once you have the full graph marked out, it's very easy just to find that one path from A to B long as you have a previous list.
 - No negative weights

---
### Graph terms
- cycle: When you start at Node(x), follow the links, and end back at Node(x). At least 3 Node must be passed to
  become cycle.
- acyclic: A graph that contains no cycles
-  connected: When every node has a path to another node
- directed: When there is a direction to the connections. Think Twitter.
- undirected: !directed. Think Facebook.
- weighted: The edges have a weight associated with them. Think Maps.
    - In an undirected graph, a weight would be for both directions,it'd be a symmetric relationship.Whereas in a
      directed graph, it can be asymmetric.
- dag: Directed, acyclic graph.
