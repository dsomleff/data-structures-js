import LinkedList from "./index";

describe('Linked List', function () {
    it('should add node to the front', () => {
        const myLL = new LinkedList(1);
        myLL.addFront(2);
        myLL.addFront(3);

        // expect(myLL.getFirst()).toEqual(3)
        // expect(myLL.getLast()).toEqual(1)
    });
});
