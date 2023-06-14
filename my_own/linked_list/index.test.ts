import LinkedList from "./index";

const myLL = new LinkedList();

describe('Linked List', function () {
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
});
