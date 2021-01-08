//console.log(document);

//1. store the element that says 'The King' in the 'king' variable. console.log it.
let king = document.getElementById('b325');
console.log(king);

//2. store 'The Businessman' and 'The Lamplighter' in the 'businessLamp' variable.
let businessLamp = document.getElementsByClassName('asteroid big');
console.log(businessLamp);

//3. store 'The King' and 'The Conceited Man'
//in the 'conceitedKing' variable.
//alert them one by one.
let conceitedKing = document.getElementsByClassName('container');
alert(conceitedKing[0].children[0]);
alert(conceitedKing[0].children[1]);

//4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
//in the 'noBusiness' variable.
//console.log each of them.
let noBusiness = document.getElementsByTagName('div');
for (let i = 0; i < noBusiness.length; i++){
  console.log(noBusiness[i]);
}