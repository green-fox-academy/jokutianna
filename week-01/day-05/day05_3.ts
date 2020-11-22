'use strict'
//Nothings//

null;
NaN;

null !== undefined;
NaN !== undefined;
null !== NaN;

typeof undefined; // 'undefined'
typeof null; // 'object'
typeof NaN; // 'number'

let apple;
console.log (apple);
console.log (apple + 1);
apple = null;
console.log (apple);


//Conditionals//

let a: number = 13;
if (a === 13) {
    console.log ('Yaaay! The value of the \'a\' variable is 8');
}