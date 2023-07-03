import {MyDoublyLinkedList, MyNode} from "./types";

export default class DoublyLinkedList<T> implements MyDoublyLinkedList<T>{
    public length: number;
    private head?: MyNode<T>;

    constructor() {
        this.length = 0;
    }

    prepend(item: T): void {

    }

    append(item: T): void {
    }

    get(index: number): T | undefined {
        return undefined;
    }

    insertAt(item: T, index: number): void {
    }

    remove(item: T): T | undefined {
        return undefined;
    }

    removeAt(index: number): T | undefined {
        return undefined;
    }
}
