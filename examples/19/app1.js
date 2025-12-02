// Prototype Chain for POJOs (Plain Old JavaScript Objects)

const spiderMan = {
    firstName: 'Peter',
    lastName: 'Parker',
    superheroName: 'Spider Man',
    from: 'New York',
    dob: '2003-12-05',

    greet() {
        console.log(`Hello I am ${this.firstName} from ${this.from}. How are you?`);
    },

    fight() {
        console.log(`${this.superheroName} in action...`);
    }
};

const ironMan = {
    firstName: 'Tony',
    lastName: 'Stark',
    superheroName: 'Iron Man',
    from: 'California',
    dob: '1985-10-25',

    greet() {
        console.log(`Hello I am ${this.firstName} from ${this.from}. How are you?`);
    },

    fight() {
        console.log(`${this.superheroName} in action...`);
    }
};

console.log('spiderMan');
console.log(spiderMan); // This is an object literal.
console.log(spiderMan.__proto__); // It points to Object.prototype (end of the prototype chain).
console.log(spiderMan.__proto__.__proto__); // The prototype of Object.prototype is null, which marks the absolute end of the prototype chain.

console.log("spiderMan's Prototype");
console.log(
    Object.getPrototypeOf(spiderMan)
);
console.log("spiderMan's Prototype's Prototype");
console.log(
    Object.getPrototypeOf(
        Object.getPrototypeOf(spiderMan)
    )
);

console.log('ironMan');
console.log(ironMan); // This is an object literal.
console.log(ironMan.__proto__); // It points to Object.prototype (end of the prototype chain).
console.log(ironMan.__proto__.__proto__); // The prototype of Object.prototype is null, which marks the absolute end of the prototype chain.

console.log("ironMan's Prototype");
console.log(
    Object.getPrototypeOf(ironMan)
);
console.log("ironMan's Prototype's Prototype");
console.log(
    Object.getPrototypeOf(
        Object.getPrototypeOf(ironMan)
    )
);

/*
Prototype Chain:
spiderMan --> Object.prototype --> null
ironMan --> Object.prototype --> null
*/
