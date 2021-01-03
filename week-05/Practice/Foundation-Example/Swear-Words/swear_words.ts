'use strict';

const fs = require('fs');

export function countSwearWords(filename: string) { //FileIO + parse
  let fileContent : string = '';

  try {
    fileContent = fs.readFileSync(filename, 'utf-8');
  
  } catch (error) {
    console.log(`File does not exist`);
  } 

  //console.log(fileContent);

  let contentWithoutCommaAndDot: string[] = fileContent.replace(/\./g,'\r\n').replace(/\,/g,'\r\n').split('\r\n'); //removing all commas and dots + split(enter)
  console.log(contentWithoutCommaAndDot);
  
  let ContentSplitToWords: string[][] = [];
  for(let i: number = 1; i < contentWithoutCommaAndDot.length -1; i++){
    let onlyWords: string[] = contentWithoutCommaAndDot[i].split(' ');
    ContentSplitToWords.push(onlyWords);
  }
  //return ContentSplitToWords; //CSak szavak és ' ';
  
  //Végigmenni a mátrix elemein és belepush egy arraybe? Az mehet az ötletekbe tovább
  
}
countSwearWords('content.txt');


let swearWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];


//Ötletek a megoldásra:

//splice-os megoldás
function removeSwearWord(splitFileContent: string[]) {
  let toBeCleaned: string[] = splitFileContent;
  let swearWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];

  for (let i: number = toBeCleaned.length -1; i >= 0; i--) {
    for (let j: number = 0; j < swearWords.length; i++) {
      if (toBeCleaned[i] === swearWords[j]) {
        toBeCleaned.splice(i, 1);
      }
    }
  }
  return toBeCleaned; //.length és akkor a hossza
}



//másik splice-os megoldás
function removingSwearWord(splitFileContent: string[]) {
  let toBeCleaned: string[] = splitFileContent;
  let swearWords: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];
  let index: number;
  for (let i: number = 0; i < swearWords.length; i++) {
    index = toBeCleaned.indexOf(swearWords[i]);
    if (index > -1) {
      toBeCleaned.splice(index, 1);
    }
  }
}

//includes megoldás? if includes=true then remove