// console.log(`Order total = ${orderTotal}`);
// Uncaught ReferenceError: Cannot access 'orderTotal' before initialization

// Lines 1 -> 5 are temporal dead zone for orderTotal.
// orderTotal is hoisted and allocated memory but you can't use it until it is initialized.
let orderTotal = 0;

// product worth 100 added to cart.
orderTotal += 100;

// product worth 250 added to cart.
orderTotal += 250;

console.log(`Order total = ${orderTotal}`);

// Re-declaration is not allowed.
// let orderTotal = 10;
// Uncaught SyntaxError: Identifier 'orderTotal' has already been declared (at app.js:16:5)