'use strict'

let a: number = 24;
let out: number = 0;
if ((a % 2) === 0) {
    console.log ('Hello');
}

////

let b: number = 13;
let out2: string = ' ';
if (b > 10 && b < 20) {
    console.log (out2 = 'Sweet!');
} else if (b < 10) {
    console.log ('Less!');
} else if (b > 20) {
    console.log ('More!');
}

////

let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;
if (credits === 50 || credits > 50 && isBonus) {
    console.log (c - 2);
} else if (credits < 50 && isBonus) {
    console.log (c - 1);
}else if (!isBonus) {
    console.log (c);
}

////

let d: number = 8;
let time: number = 120;
let out3: string= ' ';
if (d % 4 === 0 && time === 200 || time < 100 ) {
    console.log (out3 = 'check');
} else if (time > 100) {
    console.log (out3 = 'Time out');
} else {
    console.log (out3 = 'Run Forest Run!');
}
