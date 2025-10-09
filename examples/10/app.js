import { User } from './User.js';

const johnWick = new User('John', 'Wick', true);
console.log('John Wick', johnWick);

// Block John Wick
johnWick.active = false;
console.log('John Wick', johnWick);
