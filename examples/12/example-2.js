/**
 * Example #2
 * Uber ride request - forever pending promise.
 * A promise with an executor function, it is doing nothing.
 * We get a forever pending promise, never resolved/rejected.
 */

console.log('Started...');

// Producer
const rideRequest = new Promise((resolve, reject) => {
    console.log('Promise executor started...');

    // Typically asynchronous code goes here.
    // Create a ride request.
    // Notify nearby drivers about this ride request.
    // Check if any driver accepted this ride request.
    // Check if either driver or customer has rejected the ride request.
    // and so on...

    // Here executor is not doing anything to resolve or reject a promise.

    console.log('Promise executor ended...');
});

console.log('rideRequest', rideRequest);

// Consumer
rideRequest
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

console.log('Ended...');
