import merge_sort from "./index";

describe('Merge Sort', () => {
    it('should be a function', () => {
        expect(typeof merge_sort).toBe('function');
    });

    it('should sort array', () => {
        const arr = [4, 7, 14, 1, 3, 9, 17];

        const newArr = merge_sort(arr);

        expect(1).toBe(newArr[0]);
        expect(3).toBe(newArr[1]);
        expect(4).toBe(newArr[2]);
        expect(7).toBe(newArr[3]);
        expect(9).toBe(newArr[4]);
        expect(14).toBe(newArr[5]);
        expect(17).toBe(newArr[6]);
    });
});
