class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// The deleteValue function will return the head of the linked list as there is a chance that the head might change if we were to delete the head of the linked list itself
// Moreover we will introduce a new pointer "prev" to implement the delete functionality in order to make the connection of the prev node to the next node if the current node is the node which we want to delete. Note: if the current node is the first node i.e. head then that is the edge case which we will deal as soon as we enter the function
// const deleteValue = (head, target) => {
//     if(head.val === target) {
//         return head.next;
//     }

//     let prev = null;
//     let curr = head;
//     while(curr !== null) {
//         if(curr.val === target) {
//             prev.next = curr.next;
//         }
//         prev = curr;
//         curr = curr.next;
//     }

//     return head;
// };

const deleteValue = (head, target) => {
    if(head.val === target) {
        return head.next;
    }

    _deleteValue(head, null, target);
    return head;
};

const _deleteValue = (curr, prev, target) => {
    if(curr === null) {
        return;
    }

    if(curr.val === target) {
        prev.next = curr.next;
        return;
    }

    _deleteValue(curr.next, curr, target);
};

const print = (head) => {
    if(head === null) return;
    console.log(head.val);
    print(head.next);
}

// a->b->c->d
print(a);

const newHead = deleteValue(a, "a");

console.log("-");
print(newHead);