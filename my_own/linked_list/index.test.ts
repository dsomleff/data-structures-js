import LinkedList from "./index";

const myLL = new LinkedList();

describe('Linked List', function () {
    it('should add node to the front', () => {
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
});
