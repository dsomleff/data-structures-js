import Stack from "./index";

let s = new Stack<number>();

describe('Stack', () => {
    beforeEach(() => {
        s = new Stack<number>();
    })

    it('should push new node into the Stack', () => {
        s.push(15);
        s.push(25);
        s.push(35);

        expect(s.length).toBe(3);
        expect(s.peek()).toBe(35);
        expect(s.isEmpty()).toBeFalsy();
    });
})
