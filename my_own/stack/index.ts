import {SNode} from "./types";

export default class Stack<T> {
    public length: number;
    private head?: SNode<T> | undefined;
    private tail?: SNode<T> | undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as SNode<T>;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.head = node;
            node.next = this.head.next;
            this.length++;
        }

        return;
    }

    // pop(): T | undefined {}
    //
    peek(): T | undefined {
        if (!this.head) return undefined;

        return this.head.value;
    }

    isEmpty(): boolean {
        return !this.length;
    }
}

const s = new Stack<number>();
s.push(12);
s.push(22);
s.push(32);
console.log({s});
console.log(s.peek());
