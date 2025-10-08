/**
 * Arrow functions, where to use
 * 
 * Array Methods (map, filter, reduce)
 * Conciseness and clean syntax make them ideal for quick, simple callbacks.
 * 
 * Callbacks
 * Guarantees that "this" retains the context of the surrounding scope (parent scope),
 * avoiding the common need for binding (.bind(this)) or storing "this" in a local variable (that = this).
 */

// #1

const temperatureReadings = [-10, -15, -5, 0, 10, 20, 25, 30, 35, 40, 45, 50, 51, 52, 51];

const fiftyOrMore = temperatureReadings.filter((temperature) => temperature >= 50);

console.log('Temperature Readings', temperatureReadings);
console.log('Fifty or more', fiftyOrMore);


// #2

function Timer() {
    this.seconds = 0; // 'this' refers to the Timer instance

    setInterval(() => {
        // Arrow function inherits 'this' from the outer Timer function/scope
        // If this was a regular function, 'this' inside would be the Global object.
        this.seconds++;

        console.log(`Seconds = ${this.seconds}`);
    }, 1000);
}
// new Timer().seconds will update correctly because of the arrow function
const timer = new Timer();
