/**
 * Example #1
 * Promise can be either resolved/fulfilled or rejected.
 * 
 * A Promise represents a value that is unknown now,
 * that may become known in future.
 * 
 * A Promise manages a single async value
 * that can be handled in the future.
 * 
 * Lets take an example of requesting an Uber ride.
 * 
 * When you request a ride,
 * the driver makes a promise to pick you up.
 * While you are waiting the ride is pending.
 * 
 * So initially a promise is in pending state.
 * 
 * In the future if all goes according to plan
 * the driver will resolve/fulfill the promise to pick you up,
 * then take you to your destination,
 * at this point your ride request has been fulfilled.
 * 
 * Promise is in resolved/fulfilled state.
 * 
 * But in some cases, the driver might reject your ride.
 * And then you need to raise another request for a ride.
 * 
 * Promise is in rejected state.
 * 
 * So a Promise will be either resolved or rejected.
 * Either way the original request is now finally settled.
 * 
 * Promise is in settled state.
 * 
 * Example #2
 * Promise callbacks are pushed to Microtask/Priority Queue.
 * It gets priority over Macrotask/Task Queue.
 * 
 * Example #3
 * Promises parallel execution.
 * 
 * Example #4
 * Promises sequence execution.
 * 
 * Example #5
 * Promises race execution.
 */


/**
 * Producer
 * When constructed Promise starts off in a Pending state.
 * It is developer's job to define a callback function called an executor function
 * which is passed to Promise constructor.
 * This executor function defines whether to resolve or reject the promise,
 * it will contain asynchronous code.
 * 
 * Consumer
 * Consumer of the Promise can call its .then/.catch/.finally method.
 * It waits for the Promise to be settled (either resolved or rejected).
 * .then = function that handles fulfilment or resolved promise, receives value
 * .catch = function that handles rejection or rejected promise, receives error
 * .finally = function that handles settled promise, it allows to do cleanup at the end.
 */

// Example #1

// Producer
const ride = new Promise((resolve, reject) => {
    const driverArrived = false;

    if (driverArrived) {
        // We can pass any value, object into the resolve function.
        // For example here we can share ride details object, that can be consumed later.
        resolve('Driver arrived. Ride details. Share OTP: 0987. Happy journey! :)');
    } else {
        // We can pass any value, object into the reject function.
        // Generally we will pass an Error object, which contains reasons for failure.
        reject(new Error('Driver bailed :( Please book another ride!'));
    }
});

// Consumer
ride
    .then((result) => {
        console.log('then #1 - result', result);
        return 'OTP: 0987';
    })
    .then((result) => {
        console.log('then #2 - result', result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log('Your Uber ride finally got settled. Please share your feedback and ratings.');
    });


// // Example #2

// console.log('Before Promise');

// // Producer
// const rideRequest = new Promise((resolve, reject) => {
//     console.log('Promise > Executor function started...');

//     const driverReady = true;

//     if (!driverReady) {
//         // this will be ignored if Promise is resolved
//         reject(new Error('No ride available at the moment. Please try again.'));
//         console.log('Promise > Executor function finished > rejected');
//     }

//     const rideDetails = {
//         from: 'From',
//         to: 'To',
//         driver: 'Driver Name',
//         vehicle: {
//             type: 'Car',
//             number: 'IN-1234',
//         },
//         code: '9898',
//     };

//     // this will be ignored if Promise is rejected
//     resolve(rideDetails);
//     console.log('Promise > Executor function finished > resolved');
// });

// console.log('rideRequest', rideRequest);

// // Consumer
// rideRequest
//     .then(result => console.log('resolved result', result))
//     .catch(error => console.error('rejected error', error))
//     .finally(() => console.log('Ride request finally settled!'));

// console.log('After Promise');


// // Example #3
// Re-resolve a promise?
// You can resolve a Promise once only. Next resolve will be ignored.

// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => {
//     // Note: This callback will be executed but resolve will be ignored as the Promise is already resolved above.
//     console.log('setTimeout callback...');
//     resolve(2); // this resolve is ignored
//   }, 1000);
// });

// promise.then(console.log);


// // Example #4
// // Delay with a promise

// function delay(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), ms);
//     });
// }

// delay(3000)
//     .then(() => console.log('Hello'));
