import { DynamicArray } from './index';

describe('Dynamic da', function () {
    let da: DynamicArray;

    beforeEach(() => {
        da = new DynamicArray(2);
    });

    it('should get and set values', () => {
        da.set(0, "a");
        expect(da.get(0)).toBe('a');
    });

    it('should insert value into specific index', () => {
        da.set(0, "a");
        da.set(1, "b");
        da.set(2, "c");
        da.insert(1, "d");

        expect(da.size).toBe(4);
        expect(da.get(0)).toBe('a');
        expect(da.get(1)).toBe('d');
        expect(da.get(2)).toBe('b');
        expect(da.get(3)).toBe('c');
    });

    it('should delete value of specific index', () => {
        da.set(0, "a");
        da.set(1, "b");
        da.set(2, "c");

        da.delete(1);

        expect(da.size).toBe(2);
        expect(da.get(0)).toBe('a');
        expect(da.get(1)).toBe('c');
    });

    it('should show is empty data array or not', () => {
        expect(da.isEmpty()).toBe(true);
        da.set(0, 'a');
        expect(da.isEmpty()).toBe(false);
    });

    it('should show if data contains a value', () => {
        expect(da.contains('a')).toBe(false);
        da.set(0, 'a');
        expect(da.contains('a')).toBe(true);
        expect(da.contains('f')).toBe(false);
    });
});
