/**
 * The Spread (...) Operator
 * Just like spreading butter, we can spread object or array to get all of its values.
 * 
 * Function Rest Parameter
 * Gather rest of the arguments.
 * The rest of the parameters can be included in the function definition by using three dots ... 
 * followed by the name of the array that will contain them.
 * The dots literally mean “gather the remaining parameters into an array”.
 */

// #1 Copy an array

let nums = [1, 2, 3];

let numsCopy = [...nums]; // spread the array into a list of parameters
                          // then put the result into a new array

console.log('JSON.stringify(nums)', JSON.stringify(nums));

// do the arrays have the same contents?
console.log(
    'JSON.stringify(nums) === JSON.stringify(numsCopy)',
    JSON.stringify(nums) === JSON.stringify(numsCopy)
); // true

// are the arrays equal?
console.log('nums == numsCopy', nums == numsCopy);   // false (not same reference)
console.log('nums === numsCopy', nums === numsCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
nums.push(4);
console.log('nums', nums); // 1, 2, 3, 4
console.log('numsCopy', numsCopy); // 1, 2, 3


// #2 Copy an object

const johnWick = {
  firstName: "John",
  lastName: "Wick",
  age: 50,
  eyeColor: "Gray"
};

let johnWickCopy = { ...johnWick }; // spread the object into a list of parameters
                                    // then return the result in a new object

console.log('JSON.stringify(johnWick)', JSON.stringify(johnWick));

// do the objects have the same contents?
console.log(
    'JSON.stringify(johnWick) === JSON.stringify(johnWickCopy)',
    JSON.stringify(johnWick) === JSON.stringify(johnWickCopy)
); // true

// are the objects equal?
console.log('johnWick == johnWickCopy', johnWick == johnWickCopy);   // false (not same reference)
console.log('johnWick === johnWickCopy', johnWick === johnWickCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
johnWick.age = 55;
console.log('johnWick', JSON.stringify(johnWick));
console.log('johnWickCopy', JSON.stringify(johnWickCopy));


// #3

console.log(Math.max(10, 20, 30));

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(Math.max(...numbers));


// #4
// Also, the spread syntax can be used to merge arrays:

let arr1 = [10, 30, 50];
let arr2 = [20, 40, 60];

let merged = [0, ...arr1, 2, ...arr2];

console.log(merged);


// #5

let str = "Hello";

console.log([...str]); // H,e,l,l,o


// #6

function sumAll(...nums) { // args is the name for the array
  let sum = 0;

  for (let num of nums) {
    sum += num;
  }

  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
