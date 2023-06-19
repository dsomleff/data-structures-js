type MyNode<T> = {
    data: T,
    next: MyNode<T> | null
}

interface MyLinkedList<T> {
    createIfEmpty(item: T): MyNode<T>,
    addFront(item: T): void;
    getFirst(): T | null;
    getLast(): T | null | undefined;
    addBack(item: T): void,
    getSize(): number,
    removeAll(): void,
    removeNode(item: T): void,
    reverse(): void,
}

export {MyNode, MyLinkedList};

