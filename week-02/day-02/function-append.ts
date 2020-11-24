'use strict';

let typo: string = 'Chinchill';
console.log(typo);

function appendAFunc(name: string) :string {
    let newName = name + 'a';
    console.log(newName);
      return newName;
}
appendAFunc(typo);