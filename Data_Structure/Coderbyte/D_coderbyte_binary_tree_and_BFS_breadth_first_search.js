// Implementation of plain binary tree
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right =  null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

//       a
//      / \
//     b   c
//    / \   \
//   d   e   f

// The Breadth First Traversal of the above tree is: a, b, c, d, e, f
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// We will implement the BFS through the queue data structure and we will look at the node and push it's value along with the value of it's children on the queue and repeat the same process for it's children

const breadthFirstPrint = (root) => {
    const queue = [root];
    while(queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val);
        // Now we will check if the current node that is dequeued has any children. If it does then enqueue them on the queue or else move on to the next iteration
        if(curr.left != null) {
            queue.push(curr.left);
        }
        if(curr.right != null) {
            queue.push(curr.right);
        }
    }
};

breadthFirstPrint(a);

// BFS implementation

// Example: 1

// Write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments.
// The function should return a boolean indicating whether or not the tree contains the target value

const bfs = (root, target) => {
    const queue = [root];
    while(queue.length > 0) {
        const curr = queue.shift();
        if(curr.val === target) {
            return true;
        }
        if(curr.left != null) {
            queue.push(curr.left);
        }
        if(curr.right != null) {
            queue.push(curr.right);
        }
    }
    return false;
};

console.log(bfs(a, "e")); // true
console.log(bfs(a, "z")); // false

// Example: 2

// Write a function, sumTree(root), that takes in the root of a binary tree as an argument
// The function should return the total sum of all values in the tree. You can assume that the tree only contains number values

const g = new Node(3);
const h = new Node(2);
const i = new Node(7);
const j = new Node(4);
const k = new Node(-2);
const l = new Node(5);

g.left = h;
g.right = i;
h.left = j;
h.right = k;
i.right = l;

const sumTree = (root) => {
    const queue = [root];
    let sum = 0;
    while(queue.length > 0) {
        const curr = queue.shift();
        sum += curr.val;
        if(curr.left != null) {
            queue.push(curr.left);
        }
        if(curr.right != null) {
            queue.push(curr.right);
        }
    }
    return sum;
};

console.log(sumTree(g));
