// Our design of a linked list will involve creating two classes. We’ll create a Node class for
// adding nodes to a linked list, and we’ll create a LinkedList class, which will provide
// functions for inserting nodes, removing nodes, displaying a list, and other housekeeping
// functions.

// The Node Class: It consists of two properties: element, which store’s the node’s data, and next, which stores a link to the next node in the linked list. To create nodes, we’ll use a class Node with constructor that sets the values for the two properties:
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

// The LList class provides the functionality for a linked list. The class includes functions for inserting new nodes, removing nodes, and finding a particular data value in a list. There is also a constructor function used for creating a new linked list. The only property stored in a linked list is a node to represent the head of the list.
class LList {
    // The head node starts with its next property set to null and is changed to point to the first element inserted into the list, since we create a new Node element but don’t modify its next property here in the constructor.
    constructor() {
        this.head = new Node("head");
    }

    // The first function we’ll examine is the insert function, which inserts a node into a list. To insert a new node, you have to specify which node you want to insert the new node before or after. We’ll start by demonstrating how to insert a new node after an existing node.
    // To insert a node after an existing node, we first have to find the “after” node. To do this, we create a helper function, find(), which searches through the linked list looking for the specified data. When this data is found, the function returns the node storing the data. Here is the code for the find() function:
    find(item) {
        let currNode = this.head;
        while(currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // The find() function demonstrates how to move through a linked list. First, we create a new node and assign it as the head node. Then we loop through the linked list, moving from one node to the next when the value of the current node’s element property is not equal to the data we are searching for. If the search is successful, the function returns the node storing the data. If the data is not found, the function returns null. 
    // Once the “after” node is found, the new node is inserted into the linked list. First, the new node’s next property is set to the value of the next property of the “after” node.
    // Then the “after” node’s next property is set to a reference to the new node. Here is the definition of the insert() function:
    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    // We’re ready now to test our linked list code. However, before we do that, we need a function that will display the elements of a linked list. The display() function is defined below:
    display() {
        let currNode = this.head;
        while(!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    // This function starts by looking into the linkedlist by assigning the head of the list to a new node. We then loop through the linked list, only stopping when the value of the current nodes next property is set to null. In order to disply only nodes with data in them(in other words, not the head node), we access the element property of the node that the current node is pointing to:
    // currNode.next.element

    // Removing Nodes from linked list:
    // In order to remove a node from a linked list, we need to find the node that is just before the node we want to remove. Once we find that node, we change its next property to no longer reference the removed node, and the previous node is modified to point to the node after the removed node. We can define a function, findPrevious(), to perform this task. This function traverses the linked list, stopping at each node to see if the next node stores the data that is to be removed. When the data is found, the function returns this node (the “previous” node), so that its next property can be modified. Here is the definition for findPrevious():
    findPrevious(item) {
        let currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // Now we're ready to write the remove() function:
    remove(item) {
        let prevNode = this.findPrevious(item);
        if(!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
    // The main line of the remove() function above is: prevNode.next = prevNode.next.next
    // We are just skipping over the node we want to remove and linking the "previous" node with the node just after the one we are removing.
    
}

let cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("Carlisle", "Alma");
cities.display();
console.log();
cities.remove("Alma");
cities.display();