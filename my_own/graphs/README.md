# Graphs

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


### Implementation Terms
- node: a point or vertex on the graph
- edge: the connection between two nodes


### Big O
BigO is commonly stated in terms of V and E where V stands for vertices and E stands for edges. <br/>

So O(V * E) means that we will check every vertex, and on every vertex we check every edge


### How are graphs represented
- adj list: list of edges, connections to the nodes. Usually they have 
```js
[{to: node_to_which_connected, weight: number}]
```
- adj matrix: list of nodes that looks like, memory consuming `O (v)2`

### Basic Searches
BFS and DFS still exist on a graph, and they are virtually no different from the tree.

### Dijkstra's Shortest Path
 - it is calculating the shortest path from one node to all other nodes in the graph. Which means we can also 
 specifically find it to an individual node as well. Because once you have the full graph marked out, it's very easy just to find that one path from A to B long as you have a previous list.
 - No negative weights
 - 
