import DoublyLinkedList from "./index";

describe('Doubly Linked List', () => {
    const list = new DoublyLinkedList<number>();

    it('should work', () => {
        list.append(5);
        list.append(7);
        list.append(9);

        expect(list.get(2)).toEqual(9);
        expect(list.removeAt(1)).toEqual(7);
        expect(list.length).toEqual(2);

        list.append(11);
        expect(list.removeAt(1)).toEqual(9);
        expect(list.removeAt(9)).toEqual(undefined);
        expect(list.removeAt(0)).toEqual(5);
        expect(list.removeAt(0)).toEqual(11);
        expect(list.length).toEqual(0);

        list.append(5);
        list.append(7);
        list.append(9);

        expect(list.get(2)).toEqual(9);
        expect(list.get(0)).toEqual(5);
        expect(list.remove(9)).toEqual(9);
        expect(list.length).toEqual(2);

        list.prepend(42);

        expect(list.get(0)).toEqual(42);
        expect(list.length).toEqual(3);

        list.insertAt(69, 2);
        expect(list.get(2)).toBe(69);
    });
})
