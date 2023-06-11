# Big O (Runtime Complexity)

### O(1) - Constant time
No matter how many elements we are working with, the same algorithm/operation will take the same amount of time
```js
function addItems(n) {
    return n + n + n;
}
```

### O(log(n)) - Logarithmic time
- If doubling the number of elements you are iterating over, doesn't double amount of work. E.g. searching operations
  are log(n).
- Sorting operations. May be also referred as O n * log(n) (Quasilinear time)
- Divide and conquer technique

### O(n) - Linear time
Iterating through all elements in a collection of data. If you see a for loop spanning `0` to `array.length` it's 
probably `O n`.
```js
function logItems(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
```

### O(n^2) - Quadratic time
Every element in a collection has to be compared to every other element. 'The handshake problem'.
```js
function logItems(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
```

### O(2^n) - Exponential time
If you add a single element to a collection, the processing power required doubles. Most dangerous. Avoid it as much 
as possible.

### Big O Cheat Sheet
https://www.bigocheatsheet.com


