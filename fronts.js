// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges.Use only a single JavaScript file for this assignment.All examples are done in order, starting with a new instance of the SLL class.

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let new_node = new Node(value);
        new_node.next = this.head;

        this.head = new_node;
        return this.head;
    }
    // Examples:

    // SLL1 = new SLL()
    // SLL1.addFront(18) => Node { data: 18, next: null }
    // SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
    // SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

    // console.log("____Add Front____");
    // SLL1 = new SLL();
    // SLL1.addFront(18);
    // SLL1.addFront(5);
    // SLL1.addFront(73);
    // console.log(SLL1);
    // console.log(SLL1.head.next);


    // Remove Front
    // Write a method to remove the head node and return the new list head node.If the list is empty, return null.

    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        let remove = this.head;
        this.head = remove.next;
        remove.next = null;
        return this.head;
    }

    // Examples:

    // SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
    // SLL1.removeFront() => Node { data: 18, next: null }

    // console.log("___Remove Front Test___")
    // SLL1 = new SLL();
    // SLL1.addFront(18);
    // SLL1.addFront(5);
    // SLL1.addFront(73);
    // console.log(SLL1.head.next);
    // SLL1.removeFront();
    // console.log(SLL1);
    // copy

    // Front
    // Write a method to return the value(not the node) at the head of the list.If the list is empty, return null.

    // Examples:

    // SLL1.front() => 18
    // SLL1.removeFront() => null
    // SLL1.front() => null
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        }
    }
}

console.log("___Front Test___")
SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1.head.next);
SLL1.removeFront();
console.log(SLL1);
console.log(SLL1.front());