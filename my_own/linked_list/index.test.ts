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

        expect(myLL.getFirst()).toEqual(3);
        expect(myLL.getLast()).toEqual(1);
    });

    it('should return first node in the list', () => {
        myLL.addFront(1);
        expect(myLL.getFirst()).toEqual(1);
    });

    it('should return last node in the list', () => {
        myLL.addFront(1);
        myLL.addFront(2);
        myLL.addFront(3);

        expect(myLL.getLast()).toEqual(1);
    });

    it('should add node to the end of the list', () => {
        myLL.addBack(1);
        myLL.addBack(2);
        myLL.addBack(3);

        expect(myLL.getFirst()).toEqual(1);
        expect(myLL.getLast()).toEqual(3);
    });

    it('should show the size of a list', () => {
        expect(myLL.getSize()).toEqual(0);

        myLL.addBack(1);
        expect(myLL.getSize()).toEqual(1);

        myLL.addBack(2);
        expect(myLL.getSize()).toEqual(2);
    });

    it('should remove all nodes from the list', () => {
        myLL.addFront(1);
        myLL.addFront(2);
        myLL.addBack(3);

        myLL.removeAll();
        expect(myLL.getSize()).toEqual(0);
    });
});
