export default function merge_sort(arr: number[]): number[] {
    if (arr.length < 2) return arr;

    let middleIndex = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIndex);
    let secondHalf = arr.slice(middleIndex);

    return merge(merge_sort(firstHalf), merge_sort(secondHalf));
}

function merge(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];

    while (arr1.length && arr2.length) {
        let minElement: number | undefined;

        if (arr1[0] < arr2[0]) {
            minElement = arr1.shift();
        } else {
            minElement = arr2.shift();
        }

        if (minElement != null) {
            result.push(minElement);
        }
    }

    if (arr1.length) {
        result = result.concat(arr1);
    } else {
        result = result.concat(arr2);
    }

    return result;
}
