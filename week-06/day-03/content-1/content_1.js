//1)  Append every paragraph with the last one's content.

console.log(window);
console.log(document);

//Append every paragraph with last one's content
let paragraph = document.querySelectorAll('p');

for (let i = 1; i < paragraph.length; i++) {
  paragraph[i].innerText = paragraph[i-1].innerText + ' ' + paragraph[i].innerText;
}
console.log(paragraph);

//Do the same again, but you should keep the cat strong
//Only works when first is commented!

let paragraph2 = document.querySelectorAll('1');

for (let i = 1; i < paragraph2.length; i++) {
  paragraph2[i].innerHTML = paragraph2[i-1].innerHTML + ' ' + paragraph2[i].innerHTML;
}
console.log(paragraph2);