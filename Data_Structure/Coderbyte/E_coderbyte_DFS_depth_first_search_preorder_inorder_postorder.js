// In Depth First Search the depth of the tree is explored first before the nodes of the tree are visited laterally. For BFS we used queue for our implementation, but for DFS it is convenient to use the stack data structure of our implementation.
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

// The Breadth First Traversal of the above tree is: a, b, d, e, c, f
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// const depthFirstPrint = (root) => {
//     const stack = [root];
//     while(stack.length > 0) {
//         const curr = stack.pop();
//         console.log(curr.val);
//         // Add curr's children to the top of the stack
//         // Here we are implementing DFS by pushing the right child of a node first and then left child as it will result on the left child on the top of the stack in this iteration; in next iteration the left side will be explored before moving on the right side
//         if(curr.right != null) {
//             stack.push(curr.right);
//         }
//         if(curr.left != null) {
//             stack.push(curr.left);
//         }
//     }
// };

// Recursive Implementation

const depthFirstPrint = (root) => {
    // The tree is empty
    if(root === null) return;

    console.log(root.val);
    depthFirstPrint(root.left);
    depthFirstPrint(root.right);
};

depthFirstPrint(a);
// abdecf

//       a
//      / \
//     b   c
//    / \   \
//   d   e   f

// pre-order traversal
// Here the traversal is preorder as we print out the parent before the children
console.log("Pre Order Traversal");
const preOrder = (root) => {
    if(root === null) return;

    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
};

// self, left, right

preOrder(a); // abdecf

// post-order traversal
// Here we print out the parent after all it's children are printed out first
console.log("Post Order Traversal");
const postOrder = (root) => {
    if(root === null) return;

    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

// left, right, self

postOrder(a); // debfca

// in-order traversal
console.log("In Order Traversal");
const inOrder = (root) => {
    if(root === null) return;

    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

// left, self, right

inOrder(a); // dbeacf

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

// const sumTree = (root) => {
//     const stack = [root];
//     let sum = 0;
//     while(stack.length > 0) {
//         const curr = stack.pop();
//         sum += curr.val;
//         if(curr.right != null) {
//             stack.push(curr.right);
//         }
//         if(curr.left != null) {
//             stack.push(curr.left);
//         }
//     }
//     return sum;
// };

const sumTree = (root) => {
    if(root === null) return 0;

    return sumTree(root.left) + root.val + sumTree(root.right);
};

console.log(sumTree(g));
