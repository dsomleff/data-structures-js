interface QNode<T> {
    value: T;
    next: QNode<T> | null;
}

interface MyQueue<T> {
    length: number;
}

export {QNode, MyQueue};
