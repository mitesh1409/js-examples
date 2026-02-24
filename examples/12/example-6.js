async function promiseOne() {
    console.log('Called async function promiseOne');
}

promiseOne();

// We need to mark this function as async to use await inside it.
// function promiseTwo() {
//     return await Promise((resolve, reject) => {
//         resolve('Resolved value from promiseTwo');
//     });
// }

async function promiseThree() {
    const result = await new Promise((resolve, reject) => {
        console.log('Inside promiseThree executor function');
        resolve('Resolved value from promiseThree');
    }).then((result) => {
        console.log('result', result);
        return result;
    });
    return result;
}

console.log(promiseThree());

console.log('Last line...');
