const N = 45;

// Without Memoization
function generateNthFibonacci(n) {
    if (n <= 0) {
        throw Error('Invalid argument: give a positive number');
    }

    const first = 0;
    const second = 1;

    if (n === 1) {
        return first;
    }

    if (n === 2) {
        return second;
    }

    return generateNthFibonacci(n-1) + generateNthFibonacci(n-2);
}

console.log('Without Memoization');

console.time('fibonacci');
console.log(`Fibonacci #${N} = ${generateNthFibonacci(N)}`);
console.timeEnd('fibonacci');

console.time('fibonacci');
console.log(`Fibonacci #${N} = ${generateNthFibonacci(N)}`);
console.timeEnd('fibonacci');

console.time('fibonacci');
console.log(`Fibonacci #${N} = ${generateNthFibonacci(N)}`);
console.timeEnd('fibonacci');

console.log('==============================');

// Each of them takes around 4254ms

// With Memoization
function fibonacci(n) {
    if (n <= 0) {
        throw Error('Invalid argument: give a positive number');
    }

    const first = 0;
    const second = 1;

    if (n === 1) {
        return first;
    }

    if (n === 2) {
        return second;
    }

    return memoFibonacci(n-1) + memoFibonacci(n-2);
}

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

const memoFibonacci = memoize(fibonacci);

console.log('With Memoization');

console.time('memoFibonacci');
console.log(`Fibonacci #${N} = ${memoFibonacci(N)}`);
console.timeEnd('memoFibonacci');

console.time('memoFibonacci');
console.log(`Fibonacci #${N} = ${memoFibonacci(N)}`);
console.timeEnd('memoFibonacci');

console.time('memoFibonacci');
console.log(`Fibonacci #${N} = ${memoFibonacci(N)}`);
console.timeEnd('memoFibonacci');

// It takes around 0.116943359375ms first time, repeated calls take around 0.009ms
