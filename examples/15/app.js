// What is the output of the following code?

function show() {
    {
        var x = 9;
        var y = 10;
    }
    console.log(x, y);
}

show();

/*
Output:
9 10
*/

// Modify this code so that x and y don't leak outside the block.
// Using IIFE

function show() {
    (function() {
        var x = 9;
        var y = 10;
    })();

    console.log(x, y);
}

show();

/*
Output:
Uncaught ReferenceError: x is not defined
*/

// Modify this code so that x and y don't leak outside the block.
// Using let/const

function show() {
    {
        let x = 9;
        let y = 10;
    }
    console.log(x, y);
}

show();

/*
Output:
Uncaught ReferenceError: x is not defined
*/
