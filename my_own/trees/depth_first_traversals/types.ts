type BinaryNode<T> = {
    value: T,
    left: BinaryNode<T> | null,
    right: BinaryNode<T> | null,
};

export default BinaryNode;
