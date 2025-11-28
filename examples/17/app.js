function memoize(func) {
    const cacheStorage = new Map();

    return function(...args) {
        const inputKey = JSON.stringify(...args);
        const cachedResult = cacheStorage.get(inputKey);
        if (cachedResult) {
            return cachedResult;
        }

        const output = func(...args);
        cacheStorage.set(inputKey, output);
        return output;
    }
};

function double(n) {
    // Delay to stimulate that this function is doing heavy/time-consuming operations.
    for (let i = 0; i < 1000000000; i++) {}
    return n * 2;
}

// Without Memoization

console.time('double');
console.log(double(50));
console.timeEnd('double');

console.time('double');
console.log(double(50));
console.timeEnd('double');

console.time('double');
console.log(double(50));
console.timeEnd('double');

console.time('double');
console.log(double(50));
console.timeEnd('double');

console.time('double');
console.log(double(50));
console.timeEnd('double');

// With Memoization

const memoDouble = memoize(double);

console.time('memoDouble');
console.log(memoDouble(50));
console.timeEnd('memoDouble');

console.time('memoDouble');
console.log(memoDouble(50));
console.timeEnd('memoDouble');

console.time('memoDouble');
console.log(memoDouble(50));
console.timeEnd('memoDouble');

console.time('memoDouble');
console.log(memoDouble(50));
console.timeEnd('memoDouble');

console.time('memoDouble');
console.log(memoDouble(50));
console.timeEnd('memoDouble');
