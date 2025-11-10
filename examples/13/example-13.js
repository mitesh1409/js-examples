const PI = 3.14;
var FIVE = 5;

console.log(`PI = ${PI}`);
console.log(`FIVE = ${FIVE}`);

function levelOne() {
    const ONE = 1;

    console.log(`PI = ${PI}`);
    console.log(`ONE = ${ONE}`);

    function levelTwo() {
        const TWO = 2;

        console.log(`PI = ${PI}`);
        console.log(`ONE = ${ONE}`);
        console.log(`TWO = ${TWO}`);

        function levelThree() {
            const THREE = 3;

            console.log(`PI = ${PI}`);
            console.log(`ONE = ${ONE}`);
            console.log(`TWO = ${TWO}`);
            console.log(`THREE = ${THREE}`);
        }

        levelThree();
    }

    levelTwo();
}

levelOne();
