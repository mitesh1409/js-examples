/**
 * Modules
 * 
 * A module is just a file. One script is one module. As simple as that.
 * As our application grows bigger, we want to split it into multiple files,
 * so called “modules”.
 * A module may contain a class or a library of functions for a specific purpose.
 */

// Default export User class is imported without curly braces.
// For a default export, we always choose the name when importing.
// So team members may use different names to import the same thing,
// and that’s not good.
import User from "./User.js";
// import AnotherUser from "./User.js"; // This is also valid.

const johnWick = new User('John', 'Wick', true);

console.log('johnWick', johnWick);

// Named exports are imported using curly braces.
// Named exports force us to use exactly the right name to import.
import { months, days } from "./Calendar.js";

console.log('months', months);
console.log('days', days);

// import *
import * as calendar from "./Calendar.js";

console.log('months', calendar.months);
console.log('days', calendar.days);

// import as
// We can also use as to import under different names.
import { months as Mmonths, days as Ddays } from "./Calendar.js";

console.log('months', Mmonths);
console.log('days', Ddays);
