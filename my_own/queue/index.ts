import {QNode, MyQueue} from "./types";

class Node<T> implements QNode<T> {
    value: T;
    next: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue<T> implements MyQueue<T>{
    public length: number;
    private head?: Node<T> | undefined;
    private tail?: Node<T>| undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    add(item: T): void {
        const node = new Node(item);

        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.head.next = node;
            this.tail = node;
            this.length++;
        }
    }

    // remove(): number | undefined {}

    peek(): T | undefined {
        return this.head?.value;
    }
    //
    // isEmpty(): boolean {
    //     return this.length ? false : true;
    // }
}

const q = new Queue<string>();
q.add('1');
q.add('2');
q.add('3');
console.log({q});
console.log(q.peek());
// console.log(q.isEmpty());
