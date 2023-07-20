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
        let node: BinaryNode | null = this.search(this.root, key);

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

    // Delete: Three cases
    // 1. No child
    // 2. One child
    // 3. Two children

    // First two are simple. Third is more complex.

    // Case 1: No child - simply remove from tree by make it null.
    // Case 2: One child - copy the child to the node to be deleted and delete the child
    // Case 3: Two children - re-gig the tree to turn into a Case 1 or a Case 2

    // For third case we first need to
    // 1. Find the right side min
    // 2. Copy it to the node we want to delete (creating a duplicate)
    // 3. Then delete the min value way down on the branch we just copied

    // This works because you can represent a binary tree in more than one way.
    // Here we are taking advantage of that fact to make our more complicated
    // 3rd case delete more simple by transforming it into case 1.

    // Step 1: Create a minvalue function
    public findMin(node: BinaryNode): BinaryNode {
        return node.min();
    }

    public delete(node: BinaryNode | null, key: number): BinaryNode | null {
        if (node === null) {
            return null;
        } else if (key < node.key) {
            node.left = this.delete(node.left, key);
        } else if (key > node.key) {
            node.right = this.delete(node.right, key);
        } else { // Found you. This is the node we want to delete.

            // Case 1: No child
            if (node.left === null && node.right === null) {
                node = null;
            }

            // Case 2: One child
            else if (node.left === null) {
                node = node.right;
            } else if (node.right === null) {
                node = node.left;
            }

            // Case 3: Two children
            else {
                // Find the minimum node on the right (could also max the left...)
                const minRight = this.findMin(node.right);

                // Duplicate it by copying its values here
                node.key = minRight.key;
                node.value = minRight.value;

                // Now go ahead and delete the node we just duplicated (same key)
                node.right = this.delete(node.right, node.key);
            }
        }

        return node;
    }

    public prettyPrint() {
        // Hard coded print out of binary tree depth = 3
        let rootLeftKey = this.root?.left == null ? 0 : this.root.left.key;
        let rootRightKey = this.root?.right == null ? 0 : this.root?.right.key;

        let rootLeftLeftKey = 0;
        let rootLeftRightKey = 0;

        if (this.root?.left != null) {
            rootLeftLeftKey = this.root.left.left == null ? 0 : this.root.left.left.key;
            rootLeftRightKey = this.root.left.right == null ? 0 : this.root.left.right.key;
        }

        let rootRightLeftKey = 0;
        let rootRightRightKey = 0;

        if (this.root?.right != null) {
            rootRightLeftKey = this.root?.right.left == null ? 0 : this.root.right.left.key;
            rootRightRightKey = this.root?.right.right == null ? 0 : this.root.right.right.key;
        }

        console.log(`
               ${this.root?.key}
              /  \\
            ${rootLeftKey}      ${rootRightKey} 
          / \\      / \\ 
        ${rootLeftLeftKey}    ${rootLeftRightKey}   ${rootRightLeftKey}     ${rootRightRightKey}
        `);
    }

}
