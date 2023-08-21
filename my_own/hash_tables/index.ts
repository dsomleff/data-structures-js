type MyNode = {
    key: string,
    value: string,
    next: MyNode | null
    // value: T,
    // prev?: MyNode<T>,
    // next?: MyNode<T>,
}

export default class HashTable {
    dataMap: object[];

    constructor(size: number) {
        this.dataMap = new Array(size);
    }

    _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.dataMap.length;
        }

        return hash;
    }

    put(key: string, value: string): void {
        let index = this._hash(key);
        let node = {key: key, value: value} as MyNode;
        let current = this.dataMap[index] as MyNode;

        if (current === null) {
            this.dataMap[index] = node;
        } else {
            // collision case
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
    }
}
