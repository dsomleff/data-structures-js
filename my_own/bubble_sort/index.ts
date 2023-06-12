export default function bubble_sort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const sortMe = [5, 3, 8, 2, 1, 4];
console.log(bubble_sort(sortMe));
