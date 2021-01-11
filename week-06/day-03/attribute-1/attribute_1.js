'use strict'
/*
1.Write the image's url to the console.
2.Replace the image with a picture of your favorite animal.
3.Make the link point to the Green Fox Academy website.
4.Disable the second button.
5.Replace its text with 'Don't click me!'.
*/

//1.Show img link
let image = document.querySelector('img');
//console.log(image.getAttribute('src'));

//2.Change link 
image.setAttribute('src', 'https://cdn.mos.cms.futurecdn.net/uiCrUgVCf64TzEdTM8x9aD-1200-80.jpg');

//3. link point to GreenFox website
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/junior-programozo-kepzeseink');

//4.