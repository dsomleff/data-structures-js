import {SNode} from "./types";

export default class Stack<T> {
    public length: number;
    private head?: SNode<T> | undefined;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as SNode<T>;
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head = node;

        return;
    }

    pop(): T | undefined {
        if (!this.head) return undefined;

        const temp = this.head;
        this.head = temp.next;
        this.length--;

        return temp.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        return !this.length;
    }
}
