describe('Merge Sort', () => {
    it('should be a function', () => {
        expect(typeof sort).toBe('function');
    });

    it('should sort array', () => {
        //           l                   r
        const arr = [4, 7, 14, 1, 3, 9, 17];
        const l = 0;
        const r = arr.length - 1;

        sort(arr, l, r);

        expect(1).toBe(arr[0]);
        expect(3).toBe(arr[1]);
        expect(4).toBe(arr[2]);
        expect(7).toBe(arr[3]);
        expect(9).toBe(arr[4]);
        expect(14).toBe(arr[5]);
        expect(17).toBe(arr[6]);
    });
});
