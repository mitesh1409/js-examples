// Prototype Chain for Functions

function SuperHero(firstName, lastName, superheroName, from, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.superheroName = superheroName;
    this.from = from;
    this.dob = dob;

    this.greet = function() {
        console.log(`Hello I am ${this.firstName} from ${this.from}. How are you?`);
    };

    this.fight = function() {
        console.log(`${this.superheroName} in action...`);
    };
}

SuperHero.prototype.smile = function() {
    console.log(':)');
}

const spiderMan = new SuperHero('Peter', 'Parker', 'Spider Man', 'New York', '2003-12-05');
const ironMan = new SuperHero('Tony', 'Stark', 'Iron Man', 'California', '1985-10-25');

console.log(spiderMan); // This is an object created using SuperHero constructor function.
console.log(spiderMan.__proto__); // SuperHero.prototype, contains methods directly linked to this prototype. Prototype object contains shared methods across all the objects, methods inside the function are not shared across all the objects, they are created every time a new instance is created.
console.log(spiderMan.__proto__.__proto__); // It points to Object.prototype (end of the prototype chain).
console.log(spiderMan.__proto__.__proto__.__proto__); // The prototype of Object.prototype is null, which marks the absolute end of the prototype chain.

/*
Prototype Chain:
SuperHero --> SuperHero.prototype --> Object.prototype --> null
*/
