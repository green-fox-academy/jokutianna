'use strict';

let testText: string = 'AnaGram';

function sortUniqueChars (text: string): string[] {
  //let splittedString: string [] = text.split('');
  let regex = /[A-Z]/g;
  let foundLetters: string [] = text.match(regex);
  return foundLetters;
}

console.log(sortUniqueChars(testText));