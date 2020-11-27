'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//Draw a rectangle//

ctx.fillRect(10, 10,100,100);

//Colored rectangle//

ctx.fillStyle = 'red';
ctx.fillRect(110, 110, 100, 100);

//Line//

ctx.beginPath();
ctx.moveTo(210, 210);
ctx.lineTo(300, 300);
ctx.stroke();

//colored line//

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(310, 310);
ctx.lineTo(400, 400);
ctx.stroke();


// Circle// 

ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2);
ctx.stroke();