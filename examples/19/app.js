class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log('Starting a car...');
    }

    stop() {
        console.log('Stopping a car...');
    }

    drive() {
        console.log('Driving a car...');
    }

    toString() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

const myCar = new Car('Tata', 'Tiago', '2022');

console.log('myCar');
console.log(myCar);

console.log(`My car: ${myCar}`);

const proto1 = Object.getPrototypeOf(myCar);
const proto2 = Object.getPrototypeOf(proto1);
const proto3 = Object.getPrototypeOf(proto2);

console.log('proto1', proto1);
console.log('proto2', proto2);
console.log('proto3', proto3);

console.log(myCar.fly());

/*
console.log('proto1', proto1);
console.log('proto2', proto2);
console.log('proto3', proto3);

proto1 => Car class
This is the class (Car class) of the myCar object.
This means object's prototype = object's class.

proto2 => Object
Prototype of Car is Object

proto3 => null
Prototype of Object is null, this is end of Prototype chain.
*/
