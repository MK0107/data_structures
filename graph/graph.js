/*
  Summary: A graph data structure that can be used to represent a non-hierarchical network.
  Description: 
    1. Each graph element is called a node, or vertex.
    2. Each node has a set of adjacent nodes, or edges.
    3. Graphs can be directed or undirected, cyclic or acyclic, and weighted or unweighted.
    4. Graphs can be traversed in both breadth-first and depth-first order.
  Notable Uses: Social networks, mapping algorithms, and network analysis.
  Time Complexity (worst):
    1. Insertion: O(n*lg(n))
    2. Deletion:  O(n*lg(n))
    3. Search:  O(n*lg(n))
    4. Access:  O(n*lg(n))
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
    this.numberOfVertices = 0;
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      delete this.adjacencyList[vertex];
    }
  }

  size() {
    return this.numberOfVertices;
  }

  isEmpty() {
    return this.numberOfVertices === 0;
  }

  contains(vertex) {
    return this.adjacencyList[vertex];
  }

}

let graph = new Graph();
let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "G");
graph.addEdge("A", "E");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "C");
graph.addEdge("G", "D");

console.log(graph.adjacencyList);