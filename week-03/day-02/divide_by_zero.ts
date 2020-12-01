'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

try {
function calculateResult (divideNumber: number) {
    if (divideNumber ===0){
        throw new Error('fail');
    }
    console.log(10/divideNumber);
    
}
    calculateResult(0);
}
catch(e) {
    console.log(e.message)
}