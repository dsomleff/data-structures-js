import BinaryNode from "../depth_first_traversals/types";

export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    // have the same structure
    if (a === null && b === null) {
        return true;
    }

    // have different structure
    if (a === null || b === null) {
        return false;
    }

    // values are different
    if (a.value !== b.value) {
        return false;
    }

    return compare(a.left, b.left) && compare(a.right, b.right);
}
