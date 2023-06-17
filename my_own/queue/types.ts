interface QNode<T> {
    value: T;
    next?: QNode<T>;
}

interface MyQueue<T> {
    length: number;
}

export {QNode, MyQueue};
