```js
function bubbleSort(array) {
    // RETURN SORTED ARRAY
}

const arr = [5, 3, 8, 2, 1, 4];
bubbleSort(arr); 
```
- Compare each element of the array with each other and switch them if they in a wrong order e.g. (5 & 3 became 3, 5 and so on).
- Formula to prove that array is sorted: `arr[i] <= arr[i + 1]`
- Singular iteration will always produce the largest item in the last spot 
- Number of passes = `array.length - 1`
