console.log('Start');

const aPromise = new Promise((resolve, reject) => {
    console.log('Promise executor started...');

    const success = true;

    if (success) {
        // resolve('Success'); // Bad code. The code below this will still execute, even after resolving the promise. We should return after resolve/reject to prevent further execution of code in the executor function.

        return resolve('Success'); // Good code. The code below this will not execute, as we are returning after resolving the promise.
    }

    // reject(new Error('Failed to resolve')); // Bad code.
    return reject(new Error('Failed to resolve')); // Good code.

    console.log('Promise executor finished...');
});

console.log('aPromise', aPromise);

aPromise
    .then(result => console.log('Resolved with value', result))
    .catch(error => console.error('Rejected with error', error))
    .finally(() => console.log('Finally promise is settled.'));

console.log('End');
