export default class BinaryNode {
    constructor(public key: number, public value: string, public right: BinaryNode | null = null, public left: BinaryNode | null = null) {}

    public min(): BinaryNode {
        if (this.left == null) {
            return this;
        } else {
            return this.left.min();
        }
    }
}
