/**
 * Use const for variables whose value should never change.
 * This does not mean the value is immutable, only that the variable binding cannot be re-assigned.
 */

// We can have a shoppingCart object and it should be constant.
const shoppingCart = {
    order: {
        orderId: 1111,
        userId: 9999,
        items: [
            // Initially the cart is empty.
            // List of items goes here.
        ],
        discount: 100,
    },
    shippingAddress: {
        //
    },
    billingAddress: {
        //
    },
    paymentMethod: 'COD', // Card, UPI, Netbanking
};

// Later in the application flow we can change/edit this shoppingCart object - items removed/added,
// discount changed, payment method changed.
// But we are not allowed to re-assign a new object to the shoppingCart.

// You can change the object.
shoppingCart.paymentMethod = 'Card';

// You can't re-assign a new value to the constant. Binding happens only once.
// const shoppingCart = {
//     // A new shopping cart object.
// };
// Uncaught SyntaxError: Identifier 'shoppingCart' has already been declared (at app.js:30:7)

console.log('Shopping Cart', shoppingCart);

// You must initialize constant when it is declared.
// const PI;
// Uncaught SyntaxError: Missing initializer in const declaration (at app.js:41:7)



// console.log(PI);
// Uncaught ReferenceError: Cannot access 'PI' before initialization

// Lines 1 -> 51 are temporal dead zone for PI.
// PI is hoisted and allocated memory but you can't use it until it is declared & initialized.
const PI = 3.14;
