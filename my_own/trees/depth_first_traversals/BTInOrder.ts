import BinaryNode from "./types";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);

    return path;
}

export default function in_order_traversal(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
