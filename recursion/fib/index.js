// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/**
 * Iterative Solution
 */
function fib(n) {
    const result = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        const a = result[i -1]
        const b = result[i -2];
        
        result.push(a + b);
    }
    
    return result[n];
}

/**
 * Recursive Solution
 * Exponential time algorithm 
 */
function slowFib(n) {
    if (n < 2) {
        return n;
    }
    
    return slowFib(n - 1) + slowFib(n - 2);
}

/**
 * Memoization Solution
 * Combine this function with slowFib above
 * Or any other func that requires memoization
 */
function memoize(fn) {
    const cache = {};
    
    return function (...args) {
        if(cache[args]) return cache[args]; // fn was called with the same args we have a result
        
        const result =  fn.apply(this, args);
        cache[args] = result;
        
        return result;
    }
}

const fib = memoize(slowFib);
fib(15);