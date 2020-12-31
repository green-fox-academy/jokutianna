'use strict';

//Basics of fileIO exercises + try-catch

const fs = require('fs');

function mostCommonChar(filename: string): void {
  let fileContent : string = '';

  try {
    fileContent = fs.readFileSync(filename, 'utf-8');
  
  } catch (error) {
    console.log(`File does not exist`);
  } 
}

//From here things change...

//Takes in the file and splits the content to divided characters in an array
function parseFileContent (fileContent: string): string[] {
  let contentSplit = fileContent.split('');
  return contentSplit;
}

//Counts the characters + makes an object
function countChars(fileArray: string[]): object {
  let counter: object = {};

  fileArray.forEach(character => {
    if (counter[character] === undefined) {
      counter[character] = 1;
    } else {
      counter[character] += 1;
    }
  });
  return counter;
}

/*
let contentSplit: string[] = parseFileContent(fileContent);

let counter: object = countCharacters(contentSplit);

let result: object = counterWithObjects(counter);
*/
  



