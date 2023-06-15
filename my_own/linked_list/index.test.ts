import LinkedList from "./index";

const myLL = new LinkedList();

describe('Linked List', function () {
    beforeEach(() => {
        myLL.removeAll();
    });

    it('should add node to the front of the list', () => {
        myLL.addFront(1);
        myLL.addFront(2);
        myLL.addFront(3);

        expect(myLL.getFirst()).toBe(3);
        expect(myLL.getLast()).toBe(1);
    });

    it('should return first node in the list', () => {
        myLL.addFront(1);
        expect(myLL.getFirst()).toBe(1);
    });

    it('should return last node in the list', () => {
        myLL.addFront(1);
        myLL.addFront(2);
        myLL.addFront(3);

        expect(myLL.getLast()).toBe(1);
    });

    it('should add node to the end of the list', () => {
        myLL.addBack(1);
        myLL.addBack(2);
        myLL.addBack(3);

        expect(myLL.getFirst()).toBe(1);
        expect(myLL.getLast()).toBe(3);
    });

    it('should show the size of a list', () => {
        expect(myLL.getSize()).toBe(0);

        myLL.addBack(1);
        expect(myLL.getSize()).toBe(1);

        myLL.addBack(2);
        expect(myLL.getSize()).toBe(2);
    });

    it('should remove all nodes from the list', () => {
        myLL.addFront(1);
        myLL.addFront(2);
        myLL.addBack(3);

        myLL.removeAll();
        expect(myLL.getSize()).toEqual(0);
    });

    it('should remove specific node from the list', () => {
        myLL.addBack(1);
        myLL.addBack(2);
        myLL.addBack(3);

        myLL.removeNode(2);
        expect(myLL.getSize()).toBe(2);
        expect(myLL.getFirst()).toBe(1);
        expect(myLL.getLast()).toBe(3);
    });
});
