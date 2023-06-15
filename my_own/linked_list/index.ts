interface MyLinkedList {
    createIfEmpty(item: number): Node,
    addFront(item: number): void;
    getFirst(): number | null;
    getLast(): number | null | undefined;
    addBack(item: number): void,
    getSize(): number,
    removeAll(): void,
    removeNode(item: number): void,
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
    private head: Node | null = null;
    private length = 0;
    private tail: Node | null = null;

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
        if (this.head === null) return null;

        return this.head.data;
    }

    public getLast(): number | null | undefined {
        if (this.head === null) return null;

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

    public removeNode(item: number) {
        if (this.head === null) return;

        if (this.head.data === item) {
            this.head = this.head.next;
            this.length--;
        }

        let current = this.head;

        while(current?.next?.data !== item){
            current = current?.next!;
        }

        current.next = current.next.next;
        this.length--;

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
myLL.removeNode(5);
console.log(myLL.getSize());
myLL.removeAll();
console.log({ myLL });

export default LinkedList;
