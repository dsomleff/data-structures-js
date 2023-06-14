interface MyLinkedList {
    createIfEmpty(item: number): Node,
    addFront(item: number): void;
    getFirst(): number | null;
    getLast(): number | null | undefined;
    addBack(item: number): void,
    getSize(): number,
}

interface MyNode {
    data: number;
    next: Node | null;
}

class Node implements MyNode{
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList implements MyLinkedList {
    constructor(
        public head: Node | null = null,
        public length: number = 0,
        public tail: Node | null = null,
    ) {}

    createIfEmpty(item: number): Node {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        return node;
    }

    addFront(item: number): void {
        const node = this.createIfEmpty(item);

        node.next = this.head;
        this.head = node;
        if (this.tail) this.tail = this.tail.next;
        this.length++;

        return;
    }

    getFirst(): number | null {
        if (!this.head) return null;

        return this.head.data;
    }

    getLast(): number | null | undefined {
        if (!this.head) return null;

        if (this.tail) return this.tail.data;
    }

    addBack(item: number): void {
        const node = this.createIfEmpty(item);

        if (this.tail) {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.length++;
        }

        return;
    }

    getSize(): number {
        return this.length;
    }
}

const myLL = new LinkedList();
myLL.addFront(1);
myLL.addFront(2);
myLL.addFront(3);
myLL.addBack(5);
myLL.addBack(6);
myLL.addBack(7);
console.log(myLL.getFirst());
console.log(myLL.getLast());
console.log(myLL.getSize());

export default LinkedList;
