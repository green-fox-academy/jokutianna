'use strict'

let f1: number = 123;
let f2: number = 345;
console.log (f1 > f2);

let g1: number = 350;
let g2: number = 200;
console.log (g2 * 2 > g1);

let h: number = 1357988018575474;
console.log (h % 11 == 0);

let i1: number = 10;
let i2: number = 3;
console.log (i1 > i2 * i2 && i1 < i2 * i2 * i2);

let j: number = 1521;
console.log ( j % 5 ==0 && j % 3 == 0);

//Cuboid//

let a: number = 10;
let b: number = 8;
let c: number = 12;
console.log ('Volume: ' + a * b * c);
console.log ('Surface area: ' + (a*b + b*c + c*a) * 2);

//Seconds-in-a-day//

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
console.log ((24 - currentHours) + 'hours ' + (60 - currentMinutes) + 'minutes ' + (60 - currentSeconds) + 'seconds ');