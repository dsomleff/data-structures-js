import {MyNode, MyLinkedList} from "./types";

export default class LinkedList<T> implements MyLinkedList<T>{
    private head: MyNode<T> | null = null;
    private length = 0;
    private tail: MyNode<T> | null = null;

    public createIfEmpty(item: T): MyNode<T> {
        const node = { data: item, next: null} as MyNode<T>;

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        return node;
    }

    public addFront(item: T): void {
        const node = this.createIfEmpty(item);

        node.next = this.head;
        this.head = node;
        if (this.tail) this.tail = this.tail.next;
        this.length++;

        return;
    }

    public getFirst(): T | null {
        if (this.head === null) return null;

        return this.head.data;
    }

    public getLast(): T | null | undefined {
        if (this.head === null) return null;

        if (this.tail) return this.tail.data;
    }

    public addBack(item: T): void {
        const node = this.createIfEmpty(item);

        if (this.tail) {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.length++;
        }

        return;
    }

    public getSize(): number {
        return this.length;
    }

    public removeAll(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;

        return;
    }

    public removeNode(item: T): void {
        if (this.head === null) return;

        if (this.head.data === item) {
            this.head = this.head.next;
            this.length--;
        }

        let current = this.head;

        while(current?.next?.data !== item){
            current = current?.next!;
        }

        current.next = current.next.next;
        this.length--;

        return;
    }

    public reverse(): void {
        if (this.head === null) return;

        let temp: MyNode<T> | null = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next!;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return;
    }
}
