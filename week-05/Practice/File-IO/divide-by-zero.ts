'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'Cannot divide by zero!' if the parameter is 0

let myNumber: number = 0;

function divideByZero (x: number) {
  console.log(10 / x);
  if (x === 0) {
    throw new Error(`Error. You gave 0.`);
  }
}

try {
  divideByZero(0);
}
catch(e) {
  console.log(e.message);
}
