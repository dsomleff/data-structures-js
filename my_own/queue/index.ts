type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    add(item: T): void {}

    remove(): T | undefined {}

    peek(): T | undefined {
        return this.head?.value;
    }

    isEmpty(): boolean {
        return this.length ? true : false;
    }
}
