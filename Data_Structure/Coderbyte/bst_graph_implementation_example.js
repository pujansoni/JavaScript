// Given a graph of users and their connections, find the smallest distance between two users
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

    reconstructPath(visitedNodes, start, end) {
        // Given the last/end node in order to construct the shortest path we need to traverse backwards
        let currNode = end;
         
        const shortestPath = [];
        while(currNode !== null) {
            shortestPath.push(currNode);
            currNode = visitedNodes[currNode.value];
        }

        return shortestPath.reverse();
    }

    breadthFirstTraversal(start, end) {
        const queue = [start];
        // In this case we 
        const visitedNodes = {};
        visitedNodes[start.value] = null;

        while(queue.length > 0) {
            const node = queue.shift();

            if(node.value === end.value) {
                console.log("Found it!");
                return this.reconstructPath(visitedNodes, start, end);
            }
            // add its neighbours to the queue
            // track where nodes that we're adding are coming from

            for(const adjaceny of node.edgesList) {
                if(!visitedNodes.hasOwnProperty(adjaceny.value)) {
                    // here we are setting the adjacency value to the node i.e. its parent the node that has already been visited before in order to arrive at the adjacency
                    visitedNodes[adjaceny.value] = node;
                    queue.push(adjaceny);
                    console.log(adjaceny.value);
                }
            }
        }
    }
}

const Hannah = new Node('Hannah');
const Mary = new Node('Mary');
const Mel = new Node('Mel');
const Max = new Node('Max');
const Dan = new Node('Dan');
const Nis = new Node('Nis');
const Chris = new Node('Chris');
const Nicolette = new Node('Nicolette');
const Yair = new Node('Yair');
const Mabel = new Node('Mabel');
const Liz = new Node('Liz');

const graph = new Graph([Hannah, Mary, Mel, Max, Dan, Nis, Chris, Nicolette, Yair, Mabel, Liz]);

Hannah.connect(Mary);
Hannah.connect(Nis);
Hannah.connect(Liz);
Hannah.connect(Max);
Hannah.connect(Mel);
Nis.connect(Dan);
Nis.connect(Yair);
Nis.connect(Chris);
Liz.connect(Mabel);
Liz.connect(Yair);
Mel.connect(Max);
Chris.connect(Yair);
Chris.connect(Nicolette);
Yair.connect(Mabel);

console.log(graph.breadthFirstTraversal(Hannah, Mabel));