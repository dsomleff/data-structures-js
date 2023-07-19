class BinaryNode {
    constructor(public key: number, public value: string, public right: BinaryNode | null = null, public left: BinaryNode | null = null) {}

    public min(): BinaryNode {
        if (this.left == null) {
            return this;
        } else {
            return this.left.min();
        }
    }
}

export default class BTS {
    constructor(public root: BinaryNode | null = null) {}

    public insert(key: number, value: string) {
        this.root = this.insertItem(this.root, key, value);
    }

    public insertItem(node: BinaryNode | null, key: number, value: string) {
        // If null - set it here. We are done.
        if (node == null) {
            node = new BinaryNode(key, value);
            return node;
        }

        // Walk until you find a node
        // that is null and set it there
        if (key < node.key) {
            node.left = this.insertItem(node.left, key, value);
        } if (key > node.key) {
            node.right = this.insertItem(node.right, key, value);
        }

        // If we get here we have hit the bottom our or tree with a duplicate.
        // Since duplicates are not allowed in BSTs, simply ignore the duplicate,
        // and return our fully constructed tree. We are done!
        return node;
    }
}
