export default function binarySearch(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midIndex = Math.floor(low + (high - low) / 2);
        let value = haystack[midIndex];

        if (value === needle) {
            return true;
        } else if (value < needle) {
            low = midIndex + 1;
        } else {
            high = midIndex;
        }
    } while (low < high) {
        return false;
    }
}

const haystack = [5, 7, 12, 16, 36, 39, 42, 56, 71];
const needle = 56;

console.log(binarySearch(haystack, needle));


