interface MyLinkedList {
    addFront(item: number): void;
    // getFirst(item: any): number;
    // getLast(item: any): number;
}

class Node {
    data: number;
    next: Node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList implements MyLinkedList {
    head: Node | null;
    length: number;

    constructor(data: number) {
        this.head = new Node(data);
        this.length = 1;
    }

    addFront(item: number): void {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
        }

        node.next = this.head;
        this.head = node;
        this.length++;

    }

    getFirst(item: any) {}
    getLast(item: any) {}
}

const myLL = new LinkedList(1);
myLL.addFront(2);
myLL.addFront(3);
console.log(myLL);

export default LinkedList;
