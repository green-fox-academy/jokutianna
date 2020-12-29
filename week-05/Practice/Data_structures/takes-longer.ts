'use strict';

// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let newPart: string = 'always takes longer than';


console.log(quote.slice(0,21).concat(newPart.concat(quote.slice(21))));