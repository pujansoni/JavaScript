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

        this._append(val, this.head);
    }

    // Implementing the helper function to use in the recursive call of the append method
    _append(val, curr) {
        if(curr.next === null) {
            curr.next = new Node(val);
            return;
        }

        this._append(val, curr.next);
    }

    print() {
        const output = this._print(this.head);
        console.log(output);
    }

    // Implementing the helper function to use in the recursive call of the print method
    _print(curr) {
        if(curr === null) return "";
        return curr.val + "->" + this._print(curr.next);
    }

    contains(target) {
        return this._contains(target, this.head);
    }

    // Implementing the helper function to use in the recursive call of the contains method
    _contains(target, curr) {
        if(curr === null) return false;
        if(curr.val === target) return true;
        return this._contains(target, curr.next);
    }
}

const list = new LinkedList();
list.append(5);
list.append(52);
list.append(42);
list.print();

console.log(list.contains('a')); // true
console.log(list.contains('e')); // false
console.log(list.contains(42)); // true

// const sumList = (head) => {
//     let sum = 0;
//     let curr = head;
    
//     while(curr !== null) {
//         sum += curr.val;
//         curr = curr.next;
//     }

//     return sum;
// };
// O(n) time, O(1) space

const sumList = (head) => {
    if(head === null) return 0;
    return head.val + sumList(head.next);
}; // O(n) time, O(n) space

console.log(sumList(list.head));