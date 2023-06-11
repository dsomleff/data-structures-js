// --- Directions
// Implement a Queue datastructures using two stacks.
// *Do not* create an array inside the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('../../stack/v2/index');

class Queue {
    constructor() {
        this.data1 = new Stack();
        this.data2 = new Stack();
    }

    add(element) {
        this.data1.push(element);
    }

    remove() {
        while(this.data1.peek()) {
            this.data2.push(this.data1.pop());
        }

        let result = this.data2.pop();

        while(this.data2.peek()) {
            this.data1.push(this.data2.pop());
        }

        return result;
    }

    peek() {
        while(this.data1.peek()) {
            this.data2.push(this.data1.pop());
        }

        let result = this.data2.peek();

        while(this.data2.peek()) {
            this.data1.push(this.data2.pop());
        }

        return result;
    }
}
