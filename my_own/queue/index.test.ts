import Queue from "./index";

const q = new Queue();

describe('Queue', () => {
    it('should add notes to the top', () => {
        q.add('5');
        q.add('2');
        q.add('21');

        expect(q.peek()).toBe('5');
    });
})
