// Create an Object
const person = {
  firstName: "John",
  lastName: "Wick",
  age: 50,
  eyeColor: "Gray"
};

// Destructuring Assignment
// Get some.
// let { firstName, age } = person;

// Get all.
let { firstName, lastName, age, eyeColor, dateOfBirth } = person;

console.log('firstName', firstName);
console.log('lastName', lastName);
console.log('age', age);
console.log('eyeColor', eyeColor);

// Changing values got from the destructuring.
firstName = 'Peter';
lastName = 'Parker';
age = 21;
eyeColor = "Black";

console.log('firstName', firstName);
console.log('lastName', lastName);
console.log('age', age);
console.log('eyeColor', eyeColor);

// Original object still remains the same.
console.log('Person', person);

// dateOfBirth is not an Object property so it will be undefined.
console.log('dateOfBirth', dateOfBirth);
