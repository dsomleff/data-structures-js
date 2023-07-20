import BTS from "./BTS";

describe('Binary Search Tree', () => {
    const bst = new BTS();

    beforeEach(() => {
        bst.insert(5, "e");
        bst.insert(3, "c");
        bst.insert(2, "b");
        bst.insert(4, "d");
        bst.insert(7, "g");
        bst.insert(6, "f");
        bst.insert(8, "h");
    })

    it('should insert and find the Node', () => {
        expect("e").toEqual(bst.find(5));
        expect("c").toEqual(bst.find(3));
        expect("b").toEqual(bst.find(2));
        expect("d").toEqual(bst.find(4));
        expect("g").toEqual(bst.find(7));
        expect("f").toEqual(bst.find(6));
        expect("h").toEqual(bst.find(8));
        expect(null).toEqual(bst.find(99));

        console.log(bst.prettyPrint());
    });

    it('should delete no child', () => {
        bst.delete(bst.root, 2);

        expect(bst.find(2)).toBeNull();
        console.log(bst.prettyPrint());
    });

    it('should delete one child', () => {
        bst.delete(bst.root, 7);

        expect(bst.find(7)).toBeNull();
        console.log(bst.prettyPrint());
    });

    it('should delete two children', () => {
        bst.delete(bst.root, 7);

        expect(bst.find(7)).toBeNull();
        console.log(bst.prettyPrint());
    });
})
