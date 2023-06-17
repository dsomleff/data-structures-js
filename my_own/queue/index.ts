import {QNode, MyQueue} from "./types";

export default class Queue<T> implements MyQueue<T>{
    public length: number;
    private head?: QNode<T> | undefined;
    private tail?: QNode<T>| undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    add(item: T): void {
        const node = { value: item } as QNode<T>;

        if (!this.head) {
            this.head = this.tail = node;
            this.length++;

            return;
        }

        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }

        return;
    }

    remove(): T | undefined {
        if (!this.head) return undefined;

        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        temp.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return temp.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        return !this.length;
    }
}

const q = new Queue<number>();
q.add(1);
q.add(2);
q.add(3);
console.log(q.peek());
console.log(q.remove())
q.remove();
q.remove();
console.log(q.isEmpty());

