'use strict';

export function getUniqueCharacters(text: string): string[] {
  text = text.toLowerCase();
  text = text.replace(/[^a-z]/g, '');
  let textSplit: string[] = text.split('');
  console.log(textSplit);


  let counter: object = {};
  textSplit.forEach(character => {
    if (counter[character] === undefined) {
      counter[character] = 1;
    } else {
      counter[character] += 1;
    }
  });

  let newText: string[] = [];
  let key: string = '';
  Object.keys(counter).forEach(function (element) {
    if (counter[element] === 1) {
      key = element;
      newText.push(element);
    }
  })
  return newText; 
}

let testText: string = 'anagram';
console.log(getUniqueCharacters(testText));