'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


//red horizontal line in the middle and a green vertical one//

ctx.strokeStyle ='green';
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(300, 350);
ctx.stroke();

ctx.strokeStyle ='red';
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(550, 200);
ctx.stroke();
