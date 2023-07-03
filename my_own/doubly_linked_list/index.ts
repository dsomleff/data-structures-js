import {MyDoublyLinkedList, MyNode} from "./types";

export default class DoublyLinkedList<T> implements MyDoublyLinkedList<T>{
    public length: number;
    private head?: MyNode<T>;
    private tail?: MyNode<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = {value: item} as MyNode<T>;

        this.length++;

        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    append(item: T): void {
        this.length++;
        const node = {value: item} as MyNode<T>;

        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    get(index: number): T | undefined {
        return undefined;
    }

    insertAt(item: T, index: number): void {
        if (index > this.length) {
            throw new Error('oh no');
        }

        if (index === this.length) {
            this.append(item);
            return;
        } else if (index === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }

        curr = curr as MyNode<T>;
        const node = {value: item} as MyNode<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (curr.prev) {
            curr.prev.next = curr;
        }
    }

    remove(item: T): T | undefined {
        return undefined;
    }

    removeAt(index: number): T | undefined {
        return undefined;
    }
}
