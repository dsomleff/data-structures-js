interface MyLinkedList {
    addFront(item: number): void;
    getFirst(): number | null;
    getLast(): number | null | undefined;
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

    addFront(item: number): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        node.next = this.head;
        this.head = node;
        if (this.tail) this.tail = this.tail.next;
        this.length++;
    }

    getFirst(): number | null {
        if (!this.head) return null;

        return this.head.data;
    }
    getLast(): number | null | undefined {
        if (!this.head) return null;

        if (this.tail) return this.tail.data;
    }
}

const myLL = new LinkedList();
myLL.addFront(1);
myLL.addFront(2);
myLL.addFront(3);
console.log(myLL.getFirst());
console.log(myLL.getLast());

export default LinkedList;
