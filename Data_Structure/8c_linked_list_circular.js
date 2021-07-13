// A circularly linked list is similar to a singly linked list and has the same type of nodes. The only difference is that a circularly linked list, when created, has its head node’s next property point back to itself. This means that the assignment: 
// head.next = head
// is propagated throughout the circularly linked list so that every new node has its next property pointing to the head of the list. In other words, the last node of the list is always pointing back to the head of the list, creating a circular list
// The reason you might want to create a circularly linked list is if you want the ability to go backward through a list but don’t want the extra overhead of creating a doubly linked list. You can move backward through a circularly linked list by moving forward through the end of the list to the node you are trying to reach
// We will use the Node class of the singular linked list in this case
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LList {
    constructor() {
        this.head = new Node("head");
        this.head.next = this.head;
    }

    find(item) {
        let currNode = this.head;
        while((currNode.element != item) && !(currNode.next.element == "head")) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    display() {
        let currNode = this.head;
        while(!(currNode.next == null) && !(currNode.next.element == "head")) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    findPrevious(item) {
        let currNode = this.head;
        while(!(currNode.next.element == "head") && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    remove(item) {
        let prevNode = this.findPrevious(item);
        if(!(prevNode.next.element == "head")) {
            prevNode.next = prevNode.next.next;
        }
    }

    // A recursive solution for reverse printing the circular linked list
    dispReverse(arg1 = this.head) {
        let currNode = arg1;
        if (currNode.next.element == "head") {
            return;
        } else {
            this.dispReverse(currNode.next);
            console.log(currNode.next.element);
        }
    }
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
console.log();
cities.dispReverse();