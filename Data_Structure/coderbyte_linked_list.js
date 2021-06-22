class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        if(this.head === null) {
            this.head = new Node(val);
            return;
        }

        // After the while loop runs the curr will be set to the last node
        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new Node(val);
    }

    print() {
        let str = '';
        let curr = this.head;
        while(curr !== null) {
            str += curr.val + '->';
            curr = curr.next;
        }
        console.log(str);
    }

    contains(target) {
        let curr = this.head;
        while(curr != null) {
            if(curr.val === target) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append(42);
list.append('d');
list.print();

console.log(list.contains('a')); // true
console.log(list.contains('e')); // false
console.log(list.contains(42)); // true

// Write a function, deleteValue(head, val), that accepts the head node of a linked list and a value as an argument.
// The function should delete the node of the linked list that contains the given value
// The function should return the head of the list
// Assume that the linked list only contains unique values
