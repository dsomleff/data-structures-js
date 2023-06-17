interface MyLinkedList<T> {
    createIfEmpty(item: T): Node<T>,
    addFront(item: T): void;
    getFirst(): T | null;
    getLast(): T | null | undefined;
    addBack(item: T): void,
    getSize(): number,
    removeAll(): void,
    removeNode(item: T): void,
    reverse(): void,
}

interface MyNode<T> {
    data: T;
    next: Node<T> | null;
}

class Node<T> implements MyNode<T>{
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> implements MyLinkedList<T> {
    private head: Node<T> | null = null;
    private length = 0;
    private tail: Node<T> | null = null;

    public createIfEmpty(item: T): Node<T> {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        }

        return node;
    }

    public addFront(item: T): void {
        const node = this.createIfEmpty(item);

        node.next = this.head;
        this.head = node;
        if (this.tail) this.tail = this.tail.next;
        this.length++;

        return;
    }

    public getFirst(): T | null {
        if (this.head === null) return null;

        return this.head.data;
    }

    public getLast(): T | null | undefined {
        if (this.head === null) return null;

        if (this.tail) return this.tail.data;
    }

    public addBack(item: T): void {
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

    public removeNode(item: T): void {
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

    public reverse(): void {
        if (this.head === null) return;

        let temp: Node<T> | null = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next!;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return;
    }
}

const myLL = new LinkedList<number>();
myLL.addFront(2);
myLL.addFront(1);
myLL.addBack(5);
myLL.addBack(6);

console.log(myLL.getFirst());
console.log(myLL.getLast());
console.log(myLL.getSize());
myLL.removeNode(5);
console.log(myLL.getSize());
console.log({ myLL });
myLL.removeAll();
console.log({ myLL });
export default LinkedList;
