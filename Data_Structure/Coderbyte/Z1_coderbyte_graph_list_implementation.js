// Trees are just a special kind of graph with one root and only one unique path between any two nodes
// A graph can go beyond that and have any number of root elements and multiple path between nodes
// Time complexity to find adjacent nodes - O(e) where e is the number of edges
// Time complexity to find if two nodes are connected - O(e)
// Space complexity -> O(v+e) where v is the number of vertices and e is the number of edges
// Let us look at the list implementation of the graph first
// edges list + vertices list
const vertices = ['A', 'B', 'C', 'D', 'E'];

const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
];

// findAdjacentNodes
const findAdjacentNodes = function(node) {
    // Loop through the edges
    // Is my node in the connection?
    // If yes, push the other node in pair, into adjacentNodes array
    // If no, keep looping
    const adjacentNodes = [];
    
    for(let edge of edges) {
        // edge = ['A', 'B']
        const nodeIdx = edge.indexOf(node);
        if(nodeIdx > -1) {
            adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];
            adjacentNodes.push(adjacentNode);
        }
    }

    return adjacentNodes;
};

const isConnected = function(node1, node2) {
    return edges.some((edge) => {
        return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
    });
};

console.log(findAdjacentNodes('A'));
console.log(isConnected('C', 'B'));
console.log(isConnected('A', 'E'));



// Let us look at the adjacency matrix implementation 
// Adjacency Matrix: A 2-D array filled out with 1's and 0's where each array represents a node and each index in the subarray, represents a potential connection to another node.
// The value at adjacencyMatrix[node1][node2] indicates where there is a connection between node1 and node2
// Time complexity to find adjacent nodes - O(v) where v is the number of vertices
// Time complexity to check if two nodes are connected - O(1)
const vertices1 = ['A', 'B', 'C', 'D', 'E'];

const vertexIdxs = {
    'A': 0,
    'B': 1,
    'C': 2,
    'D': 3,
    'E': 4
};

const adjacencyMatrix = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0]
];

// findAdjacencies
const findAdjacencies = function(node) {
    const adjacentNodes = [];

    // get the row in the matrix
    for(let i = 0; i < vertices1.length; i++) {
        nodeVertex = vertexIdxs[node];
        if(adjacencyMatrix[nodeVertex][i] === 1) {
            adjacentNodes.push(vertices1[i]);
        }
    }
    // loop through the row
    // if there is 1, push that node
    // otherwise skip

    return adjacentNodes;
};

console.log(findAdjacencies('A'));
console.log(findAdjacencies('E'));

// isConnected
const isConnectedAdj = function(node1, node2) {
    const nodeIdx1 = vertexIdxs[node1];
    const nodeIdx2 = vertexIdxs[node2];

    return !!adjacencyMatrix[nodeIdx1][nodeIdx2];
};

console.log(isConnectedAdj('E', 'B'));
console.log(isConnectedAdj('A', 'B'));



// Adjacency list
// For every node, store a list of what nodes it's connected to
// Time complexity to find adjacent nodes - O(1)
// Time complexity to check if two nodes are connected - O(logv) if each adjacent row is sorted
// Space complexity - O(e)
// Here we will use a different method for the implementation with the use of Node and Graph
class Node {
    constructor(value) {
        this.value = value;
        this.edgesList = [];
    }

    connect(node) {
        // Here as it is an undirected graph, if there is a connection the vertex should be present in both of the arrays
        this.edgesList.push(node);
        node.edgesList.push(this);
    }

    getAdjacentNodes() {
        return this.edgesList.map(edge => edge.value);
    }

    isConnectedG(node) {
        return this.edgesList.map(edge => edge.value).indexOf(node.value) > -1;
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }

    addToGraph(node) {
        this.nodes.push(node);
    }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

const graph = new Graph([nodeA, nodeB, nodeC, nodeD, nodeE]);

nodeA.connect(nodeB);
nodeA.connect(nodeD);
nodeB.connect(nodeC);
nodeC.connect(nodeD);
nodeC.connect(nodeE);
nodeD.connect(nodeE);

for(let node of graph.nodes) {
    console.log(`Node ${node.value}`);
    for(let connectedNode of node.edgesList) {
        console.log(`Node ${node.value} is connected to ${connectedNode.value}`);
    }
}

console.log(nodeC.getAdjacentNodes());
console.log(nodeA.isConnectedG(nodeB));


// Undirected Graph
// In an undirected graph, when there is a connection between nodes, it goes both ways
// Facebook and its users and the relationship between the users can be modeled as an undirected graph
// Users are nodes and friendships between the users are edges
// There may be many ways two users are connected on Facebook
// The graph is undirected because if you are friends with someone on Facebook, they are by definition friends with you in return

// Directed Graph
// In a directed graph, connections between nodes have direction
// The internet can be modeled as a directed graph, where individual web pages are nodes and links between the pages are directed edges
// Links are directed - just because one page links to another does not mean that page links back in return
// The degree of a node is the number of edges connected to the node
// In a directed graph, nodes have an indegree or edges pointing to it and an outdegree or edges pointing from it