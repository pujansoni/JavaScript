// First we will define the node class having three property data, left, and right. Left and right are pointers to the left and right node of a Binary Search Tree (BST)
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null;
    }

    // The insert function inserts a new node in a tree with a value data

    // helper method which creates a new node to be inserted and calls insertNode
    insert(data) {
        // Creating a node and initialising with data
        var newNode = new Node(data);
        // root is null then node will be added to the tree and made root
        if(this.root === null) {
            this.root = newNode;
        } else {
            // find the correct position in the tree and add the node
            this.insertNode(this.root, newNode);
        }
    }

    // Method to insert a node in a tree, it moves over the tree to find the location to insert a node with a given data
    insertNode(node, newNode) {
        // if the data is less than the node, data move left of the tree
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                // if left is not null recursively move down to the left until null is found
                this.insertNode(node.left, newNode);
            }
        } 
        // if the data is more than the node, data move right of the tree
        else {
            // if right is null insert node here
            if(node.right === null) {
                node.right = newNode;
            } else {
                // if right is not null recursively move down to the right until null is found
                this.insertNode(node.right, newNode);
            }
        }
    }

    // In the above code we have two methods insert(data) and insertNode(node, newNode). Let's understand them one by one:
    // i) insert(data) - It creates a new node with a value data, if the tree is empty it add this node to a tree and make it a root, otherwise it calls insert(node, data)
    // ii) insertNode(node, data) - It compares the given data with the data of the current node and moves left or right accordingly and recur until it finds a correct node with a null value where new node can be added

    // remove(data) - This function removes a node with a given data

    // helper method that calls the removeNode with a given data
    remove(data) {
        // root is re-initialized with, root of a modified tree
        this.root = this.removeNode(this.root, data);
    }

    // Method to remove node with a given data it recursively iterate over the tree to find the data and removes it
    removeNode(node, key) {
        // if the root is null then tree is empty
        if(node === null) {
            return null;
        }
        // if data to be deleted is less than roots data then move to left subtree
        else if(key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        // if data to be deleted is greater than roots data then move to right subtree
        else if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        // if data is similar to the root's data then delete this node
        else {
            // deleting node with no children
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // deleting node with one children
            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }

            // Deleting node with two children, minimum node of the right subtree is stored in aux
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    // the inorder() function performs inorder traversal of a tree starting from a given node:
    inorder(node) {
        if(node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    // the preorder() function performs preorder traversal of a tree starting from a given node
    preorder(node) {
        if(node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // the postorder() function performs postorder traversal of a tree starting from a given node
    postorder(node) {
        if(node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    // Helper Methods: Let's declare some helper methods which is useful while working with BST

    // It searches for a node with a minimum value starting from node
    findMinNode(node) {
        // finds the minimum node in tree, searching starts from a given node
        // if left of a node is null, then it must be minimum node
        if(node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    // returns root of the tree
    getRootNode() {
        return this.root;
    }

    // search for a node with given data
    search(node, data)
    {
    // if trees is empty return null
        if(node === null)
            return null;

        // if data is less than node's data
        // move left
        else if(data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data
        // move left
        else if(data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data
        // return node
        else
            return node;
    }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
						
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 / \ /
// 5 9 17

var root = BST.getRootNode();
			
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
			
// Removing node with no children
BST.remove(5);
			
			
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 \ /
//	 9 17
			
						
var root = BST.getRootNode();
			
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
			
// Removing node with one child
BST.remove(7);
			
//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27
//		 /
//		 17
			
			
var root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
			
// Removing node with two children
BST.remove(15);
	
//		 17
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27

var root = BST.getRootNode();
console.log("inorder traversal");

// prints 9 10 13 17 22 25 27
BST.inorder(root);
			
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);
