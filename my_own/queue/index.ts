interface QNode {
    value: number;
    next: Node | null;
}

class Node implements QNode {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue{
    public length: number;
    private head?: Node | undefined;
    private tail?: Node| undefined;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    add(item: number): void {
        const node = new Node(item);

        if (this.head === undefined) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.head.next = node;
            this.tail = node;
            this.length++;
        }
    }

    // remove(): number | undefined {}

    // peek(): number | undefined {
    //     return this.head?.value;
    // }
    //
    // isEmpty(): boolean {
    //     return this.length ? false : true;
    // }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log({q});
// console.log(q.isEmpty());
