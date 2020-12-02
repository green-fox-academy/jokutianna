'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

try {
    let fileContent = fs.readFileSync('my-file.txt', 'utf-8');
    console.log(fileContent);
    throw new Error ('Unable to read file');
}
catch(e) {
    console.log('Fail');
}

//Print 'Fail' not!!