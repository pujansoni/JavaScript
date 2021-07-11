// Given a DAG(Directed Acyclic Graph), return the topological ordering
class Node {
    constructor(value) {
        this.value = value;
        this.edgesList = [];
    }

    connect(node) {
        // Here its a directed graph so we will only push the edges in the current list
        this.edgesList.push(node);
    }

    getAdjacentNodes() {
        return this.edgesList;
    }

    isConnected(node) {
        return !!this.edgesList.find(edge => edge.value === node.value);
    }
}

class Graph {
    constructor(nodes) {
        this.nodes = [...nodes];
    }

    addToGraph(node) {
        this.nodes.push(node);
    }

    topologicalSort() {
        const visited = new Set();
        const topOrdering = [];
        for(const node of this.nodes) {
            this.depthFirstTraversal(node, visited, topOrdering);
        }
        console.log(topOrdering.reverse());
    }

    depthFirstTraversal(start, visited, topOrdering) {
        if(visited.has(start)) return;
        
        visited.add(start);
        console.log('Visiting node', start.value);
        for(const adjacency of start.edgesList) {
            this.depthFirstTraversal(adjacency, visited, topOrdering);
        }
        topOrdering.push(start.value);
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

const graph = new Graph([a, b, c, d, e, f]);

a.connect(c);
a.connect(b);
b.connect(d);
d.connect(f);
e.connect(f);
e.connect(c);

graph.topologicalSort();