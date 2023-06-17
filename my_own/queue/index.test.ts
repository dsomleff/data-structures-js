import Queue from "./index";

let q = new Queue<string>();

describe('Queue', () => {
    beforeEach(() => {
        q = new Queue<string>();
    });

    it('should add notes to the top', () => {
        q.add('5');
        q.add('2');
        q.add('21');

        expect(q.peek()).toBe('5');
    });

    it('should remove the first node', () => {
        q.add('8');
        q.add('72');
        q.add('11');
        q.remove();
        q.add('15');
        q.add('35');
        q.remove();

        expect(q.peek()).toBe('11');
    })
})
