'use strict'; // Activate Strict Mode for better behavior

/**
 * this in regular functions
 * 
 * this binding in regular functions is dynamic.
 * this is determined by how the regular function is called.
 * 
 * There are 4 this binding rules:
 * #1 new
 *      Function called with new (constructor function)
 *      this => newly created object
 * 
 * #2 Explicit
 *      Using call(), apply(), bind()
 *      this => the object passed as the first argument (explicitly set by the developer)
 * 
 * #3 Implicit
 *      Function called as an object method
 *      this => Object calling this function as a method
 * 
 * #4 Default
 *      Standalone function call.
 *      this => global object in Node.js, window in Browser, undefined in strict mode
 * 
 * The binding rules have a precedence:
 * new > Explicit > Implicit > Default.
 */

// #1 new

function Car(make, model) {
    // 1. 'this' is a new, empty object {}
    this.make = make; // 2. 'this' is used to set properties on the new object
    this.model = model;
    this.year = 2024;
    // 3. The new object is implicitly returned
}

const civic = new Car('Honda', 'Civic');
console.log(`new Binding:`, civic);
// Output: new Binding: Car { make: 'Honda', model: 'Civic', year: 2024 } 


// #2 Explicit

function introduce(job, city) {
    console.log(`${this.name} is a ${job} from ${city}.`);
}

const bob = { name: 'Bob' };
const charlie = { name: 'Charlie' };

// Using call() - immediate execution, arguments passed individually
introduce.call(bob, 'Developer', 'London');
// this => bob
// Output: Bob is a Developer from London.

// Using apply() - immediate execution, arguments passed as an array
introduce.apply(charlie, ['Designer', 'Paris']);
// this => charlie
// Output: Charlie is a Designer from Paris.

// Using bind() - creates a new, bound function
const bobIntroduce = introduce.bind(bob, 'Manager', 'New York');
// this => bob (remembers this binding to use later)
bobIntroduce(); // Execute the bound function later
// Output: Bob is a Manager from New York.

const charlieIntroduce = introduce.bind(charlie, 'Manager', 'New York');
// this => charlie (remembers this binding to use later)
charlieIntroduce(); // Execute the bound function later
// Output: Charlie is a Manager from New York.

// It still remembers this binding.
bobIntroduce(); // Execute the bound function later
charlieIntroduce(); // Execute the bound function later


// #3 Implicit

const user = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const dog = {
    name: 'Bolt',
    bark: user.greet // Borrowing the function
};

user.greet(); // Call site: user.greet()
// this => user
// Output: Hello, my name is Alice

dog.bark(); // Call site: dog.bark()
// this => dog
// Output: Hello, my name is Bolt


// #4 Default

function showThis() {
    // In Strict Mode, 'this' is 'undefined' here.
    // Without 'use strict', 'this' would be the Global Object (window in Browser, global in Node.js).
    console.log(`showThis(): this is`, this);
}

showThis(); 
// Output: showThis(): this is undefined 
// (or the global object if 'use strict' is removed)

const obj = { method: showThis };
obj.method();
// Implicit Binding happens
// Output: showThis(): this is { method: [Function: showThis] }


/**
 * this in arrow functions
 * 
 * Arrow functions have Lexical this, means they use this from their parent scope.
 * Lexically scoped. Inherits this from the surrounding parent scope (the place where it's defined).
 * Cannot be bound dynamically.
 */

// #1

const customerA = {
    name: 'Alice',
    logRegular: function() {
        // 'this' is bound to the 'user' object (Implicit Binding)
        console.log(`logRegular: (${this.name})`);
    }
};
customerA.logRegular(); // Output: Regular: Alice

const customerB = {
    name: 'Alice',
    logArrow: () => {
        // 'this' is inherited from the surrounding scope, which is usually the Global/Window object.
        console.log(`logArrow: (${this.name})`); 
    }
};
customerB.logArrow();

// #2

function Timer() {
    this.seconds = 0; // 'this' refers to the Timer instance

    setInterval(() => {
        // Arrow function inherits 'this' from the outer Timer function/scope
        this.seconds++;
        console.log('seconds', this.seconds);
        // If this was a regular function, 'this' inside would be the Global object.
    }, 1000);
}

// new Timer().seconds will update correctly because of the arrow function
const seconds = new Timer().seconds;
console.log(seconds);
