interface MyLinkedList {
    addFront(item: any): void;
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
    tail: Node | null;
    length: number;

    constructor(data: number) {
        this.head = new Node(data);
        this.tail = this.head;
        this.length = 1;
    }

   addFront(item: any) {}

   getFirst(item: any) {}
   getLast(item: any) {}
}

const myLL = new LinkedList(7);
console.log(myLL);

export default LinkedList;
