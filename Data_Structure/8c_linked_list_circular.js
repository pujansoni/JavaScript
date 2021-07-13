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
        // Here after initializing we are declaring the next item of any element to point towards the head. We will take care of the pointer during the other functions but by default it points to head itself
        this.head.next = this.head;
    }

    // Here we will find the item by checking two conditions a) If the current item is not the item we are looking for then move next & b) If the next item is not pointing towards the head then we will move forward in the circular linked list to cover the edge about the last edge in the circular linked list which will point towards the head
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

    // Here we will use the condition in the while loop which states if the next element is not pointing towards the head move forward in the list in order to print the elements of the list
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

    // A recursive solution for reverse printing the circular linked list. It will print the element in the reverse linked list as in each recursive call we are supplying the next value which ultimately leads towards our base case where the next element will point to "head" in which we will return and execute all our console.log() statements that are on our call stack
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
