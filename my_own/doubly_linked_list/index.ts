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
        return this.getAt(index)?.value;
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
        const curr = this.getAt(index) as MyNode<T>;
        const node = {value: item} as MyNode<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;

        if (node.prev) {
            node.prev.next = node;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; ++i) {
            if (curr.value === item) {
                break;
            }
            curr = curr.next;
        }

        if (!curr) {
            return undefined;
        }

        return this.removeNode(curr);
    }

    removeAt(index: number): T | undefined {
        const node = this.getAt(index);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    private getAt(index: number): MyNode<T> | undefined{
        let curr = this.head;
        for (let i = 0; curr && i < index; i++) {
            curr = curr.next;
        }

        return curr;
    }

    private removeNode(node: MyNode<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const out = this.head?.value;
            this.head = this.tail = undefined;
            return out;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.prev = node.next = undefined;
        return node.value;
    }
}
