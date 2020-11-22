'use strict'

//String
let welcome: string = 'Hello World';
console.log (welcome);

//Boolean
let isAwesome: boolean = true;
console.log (isAwesome);

//Integer
let theMeaningOfLifeAndTheUniverseAndEverything: number = 42;
console.log (theMeaningOfLifeAndTheUniverseAndEverything);

//Floating point number
let pi: number = 3.141592;
console.log (pi);

//Assigning and creating variable, (define its value)
let number: number = 12;
//Mutate a variable, (redefine its value)
number = 13;
console.log (number);

//Any
let dynamic: any = 5;
dynamic = true;
dynamic = 'strange';
console.log (dynamic);


//ARITHMETIC ASSIGNMENT OPERATORS
let a: number = 12;
a = a + 4;
console.log (a);

let b: number = 12;
b = b -4;
console.log (b);

let c: number = 12;
c *= 3;
console.log (c);

let d: number = 12;
d /= 3;
console.log (d);

let e: number = 12;
e %= 7;
console.log (e);

let f: number = 12;
f++;
console.log (f);

let g: number = 12;
g--;
console.log (g);

let h: number = 10;
console.log (h);
console.log (h++);
console.log (h);

let i: number = 10;
console.log (i);
console.log (++i);
console.log (i);