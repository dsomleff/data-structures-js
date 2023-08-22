type MyNode = {
    key: string,
    value: string,
    next: MyNode | null
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

        if (!this.dataMap[index]) {
            this.dataMap[index] = node;
        } else {
            let current = this.dataMap[index] as MyNode;
            // collision case
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    get(key: string): string | null {
        let index = this._hash(key);
        let current = this.dataMap[index] as MyNode;

        if (current) {
            while (current.key !== key && current.next !== null) {
                current = current.next;
            }

            return current.value;
        }

        return null;
    }
}
