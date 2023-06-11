import binarySearch from "./index";

describe('Binary Search', function () {
    const haystack = [5, 7, 12, 16, 36, 39, 42, 56, 71];

    it('should be a function', () => {
        expect(typeof binarySearch).toBe('function');
    });

    it('should return boolean if needle present in haystack or not', () => {
        expect(binarySearch(haystack, 56)).toBeTruthy();
        expect(binarySearch(haystack, 7)).toBeTruthy();
        expect(binarySearch(haystack, 21)).toBeFalsy();
        expect(binarySearch(haystack, 65)).toBeFalsy();
    });
});
