import bubble_sort from "./index";

describe('Bubble Sort', () => {
    const sortMe = [5, 4, 3, 2, 1];
    const result = [1, 2, 3, 4, 5];

    it('should be a function', () => {
        expect(typeof bubble_sort).toBe('function');
    });

    it('should sort array in ascending order', () => {
        expect(bubble_sort(sortMe)).toEqual(result);
    });
})
