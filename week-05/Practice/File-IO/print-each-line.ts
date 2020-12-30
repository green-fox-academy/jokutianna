'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

function countLines(filename) {
  let fileContent: string []= fs.readFileSync(filename,'utf-8').split('\n');
   
    console.log(fileContent.length);
  }
 
try {
countLines(`my-file.txt`);
}
catch (e) {
console.log(e.message);
}