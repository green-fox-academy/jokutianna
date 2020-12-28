'use strict'

//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee
let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Create a new list ('List B') with the values of List A
let listB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

//Print out whether List A contains Durian or not
if (listA.includes('Durian') === true){
  console.log(`It contains the Durian item.`);
} else {
  console.log(`It doesn not contain this item.`);
}

//Remove Durian from List B
listB.splice(3,1);
console.log(listB);

//Add Kiwifruit to List A after the 4th element
listA.splice(4,1,'Kiwifruit');
console.log(listA);

//Compare the size of List A and List B
if (listA.length === listB.length){
  console.log(`The two lists are equal.`);
} else {
  console.log(`The lists are not equal.`);
}

//Get the index of Avocado from List A
console.log(listA.indexOf('Avocado'));

//Add Passion Fruit and Pomelo to List B in a single statement
listB.push('Passion Fruit', 'Pomelo');
console.log(listB);

//Print out the third element from list A
console.log(listA[3]);