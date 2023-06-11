class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let temp = this.root;

        while (true) {
            if(newNode.value === temp.value) return undefined;
            if( newNode.value < temp.value) {
                if(temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if(temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value){
        if(this.root === null) return false;
        let temp = this.root;

        while(temp) {
            if(value < temp.value){
                temp = temp.left;
            } else if(value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }

        return false;
    }

    minValueNode(currentNode){
        while(currentNode && currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    minValue(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }


    deleteNode(value, currentNode=this.root) {
        if (currentNode == null) {
            return null;
        } else if (value < currentNode.value) {
            currentNode.left = this.deleteNode(value, currentNode.left);
        } else if (value > currentNode.value) {
            currentNode.right = this.deleteNode(value, currentNode.right);
        } else {
            if (currentNode.left == null && currentNode.right == null) {
                currentNode = null;
            } else if (currentNode.left == null) {
                currentNode = currentNode.right;
            } else if (currentNode.right == null) {
                currentNode = currentNode.left;
            } else {
                let subTreeMin = this.minValue(currentNode.right);
                currentNode.value = subTreeMin;
                currentNode.right = this.deleteNode(subTreeMin, currentNode.right);
            }
        }
        return currentNode;
    }
}

let myTree = new BST();
myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

myTree.insert(42);

myTree.contains(27);
myTree.contains(17);

// minValueNode call
myTree.minValueNode(myTree.root);
myTree.minValueNode(myTree.root.right);

myTree.deleteNode(18);
myTree.deleteNode(52, 76);

