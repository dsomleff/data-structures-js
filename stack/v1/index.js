class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.top = new Node(value);
        this.length = 1; // maybe height is a better name
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        
        let temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;

        return temp;
    }
}

let myStack = new Stack(7);
myStack.push(23);
myStack.push(3);
myStack.push(11);

myStack.pop();