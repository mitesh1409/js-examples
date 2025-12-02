// Prototype Chain for Classes

class SuperHero {
    constructor(firstName, lastName, superheroName, from, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.superheroName = superheroName;
        this.from = from;
        this.dob = dob;
    }

    greet() {
        console.log(`Hello I am ${this.firstName} from ${this.from}. How are you?`);
    }

    fight() {
        console.log(`${this.superheroName} in action...`);
    }
};

const spiderMan = new SuperHero('Peter', 'Parker', 'Spider Man', 'New York', '2003-12-05');
const ironMan = new SuperHero('Tony', 'Stark', 'Iron Man', 'California', '1985-10-25');

console.log(spiderMan); // This is an object of SuperHero class.
console.log(spiderMan.__proto__); // SuperHero.prototype, this contains all the methods of the SuperHero class.
console.log(spiderMan.__proto__.__proto__); // It points to Object.prototype (end of the prototype chain).
console.log(spiderMan.__proto__.__proto__.__proto__); // The prototype of Object.prototype is null, which marks the absolute end of the prototype chain.

/*
Prototype Chain:
SuperHero --> SuperHero.prototype --> Object.prototype --> null
*/
