import BinaryNode from "./BinaryNode";

export default class BTS {
    constructor(public root: BinaryNode | null = null) {}

    public insert(key: number, value: string) {
        this.root = this.insertItem(this.root, key, value);
    }

    public insertItem(node: BinaryNode | null, key: number, value: string): BinaryNode {
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

    public find(key: number): string | null {
        // First find the node
        let node: BinaryNode | null = this.search(this.root, key);

        // Then return the value
        return node == null ? null : node.value;
    }

    private search(node: BinaryNode | null, key: number): BinaryNode | null {
        if (node == null || node.key == key) {
            return node;
        } else if (key < node.key) {
            return this.search(node.left, key);
        } else if (key > node.key) {
            return this.search(node.right, key);
        }

        return null;
        // Note: Duplicate keys aren't allowed (so we don't need to check for that)
    }
}
