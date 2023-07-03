interface MyDoublyLinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

type MyNode<T> = {
    value: T,
    prev?: MyNode<T>,
    next?: MyNode<T>,
}

export {MyDoublyLinkedList, MyNode};
