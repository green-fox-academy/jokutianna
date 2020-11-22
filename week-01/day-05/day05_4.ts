'use strict'

//Conditionals//

let a: number = 13;
if (a === 13) {
    console.log ('Yaaay! The value of the \'a\' variable is 8');
}

if (a === 8) {
    console.log ('Yaaaay! The value of the \'a\' variable is 8!');

}

////

let b: number = 20;
if (b < 10) {
   console.log ('Yaaay! The value of \'b\' variable is lower than 10.');
} else {
    console.log ('Yaaay! The value of \'b\' is higher than 10.');
}

////


let c: number = 15;
if (c < 10) {
    console.log('Yaaay! The value of the \'b\' variable is lower than 10'); // This block will NOT run
  } else if (c < 20) {
    console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will run
  } else {
    console.log('Yaaay! The value of the \'b\' variable is higher than 10'); // This block will NOT run
  }

  ////

  let thristy: boolean = true;
  let hungry: boolean = false;
if (thristy && hungry) {
    console.log ('Lunch time!');
} else if (thristy || hungry) {
    console.log ('Snack time!');
} else {
    console.log ('No food for you.');
}