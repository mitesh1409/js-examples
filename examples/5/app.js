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

// dateOfBirth is not an Object property so it will be undefined.
console.log('dateOfBirth', dateOfBirth);
