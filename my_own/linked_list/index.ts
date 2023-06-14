interface MyLinkedList {
    createIfEmpty(item: number): Node,
    addFront(item: number): void;
    getFirst(): number | null;
    getLast(): number | null | undefined;
    addBack(item: number): void,
    getSize(): number,
    removeAll(): void,
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

    public createIfEmpty(item: number): Node {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        return node;
    }

    public addFront(item: number): void {
        const node = this.createIfEmpty(item);

        node.next = this.head;
        this.head = node;
        if (this.tail) this.tail = this.tail.next;
        this.length++;

        return;
    }

    public getFirst(): number | null {
        if (!this.head) return null;

        return this.head.data;
    }

    public getLast(): number | null | undefined {
        if (!this.head) return null;

        if (this.tail) return this.tail.data;
    }

    public addBack(item: number): void {
        const node = this.createIfEmpty(item);

        if (this.tail) {
            this.tail.next = node;
            this.tail = this.tail.next;
            this.length++;
        }

        return;
    }

    public getSize(): number {
        return this.length;
    }

    public removeAll(): void {
        this.head = null;
        this.tail = null;
        this.length = 0;

        return;
    }
}

const myLL = new LinkedList();
myLL.addFront(1);
myLL.addFront(2);
myLL.addBack(5);
myLL.addBack(6);

console.log(myLL.getFirst());
console.log(myLL.getLast());
console.log(myLL.getSize());
myLL.removeAll();
console.log(myLL);

export default LinkedList;
