// Traverses deeply into the data structure by exploring all nodes on a branch going forward until you reach the node you are searching for or a dead end
// Backtrack up the branch until you reach a branch to explore
// Uses a stack data structure
class Node {
    constructor(value) {
        this.value = value;
        this.edgesList = [];
    }

    connect(node) {
        this.edgesList.push(node);
        node.edgesList.push(this);
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

    depthFirstTraversal(start, end, visited) {

        if(!visited) {
            visited = new Set();
        }

        // keep traversing deeply until you either hit a leaf node or you are at your end node i.e. the node you are looking for
        if(start.value === end.value) {
            console.log("Found it!");
            return;
        }
        
        console.log('Visiting node', start.value);
        visited.add(start);
        for(const adjacency of start.edgesList) {
            if(!visited.has(adjacency)) {
                this.depthFirstTraversal(adjacency, end, visited);
            }
        }
    }
}

const DFW = new Node('DFW');
const JFK = new Node('JFK');
const LAX = new Node('LAX');
const HNL = new Node('HNL');
const SAN = new Node('SAN');
const EWR = new Node('EWR');
const BOS = new Node('BOS');
const MIA = new Node('MIA');
const MCO = new Node('MCO');
const PBI = new Node('PBI');
const HKG = new Node('HKG');

const graph = new Graph([DFW, JFK, LAX, HNL, SAN, EWR, BOS, MIA, MCO, PBI, HKG]);

DFW.connect(LAX);
DFW.connect(JFK);
LAX.connect(HNL);
LAX.connect(EWR);
LAX.connect(SAN);
JFK.connect(BOS);
JFK.connect(MIA);
MIA.connect(MCO);
MCO.connect(PBI);
MIA.connect(PBI);

graph.depthFirstTraversal(DFW, MCO);

// Depth First Search has a time complexity of O(v + e) where v is the number of vertices and e is the number of edges
// The space complexity is O(v) because the visited array will at most store each vertex if we traverse the entire graph