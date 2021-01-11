'use strict';
/*
1) replace the list items' content with items from this list:
    ['apple', 'banana', 'cat', 'dog']
2) change the <ul> element's background color to 'limegreen'
    - use css class to change the color instead of the style property
*/

let liElements = document.querySelectorAll('li');

let fruits = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < liElements.length; i++) {
  liElements[i].innerText = fruits[i];
}