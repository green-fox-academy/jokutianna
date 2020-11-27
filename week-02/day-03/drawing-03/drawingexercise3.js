'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'grey';
ctx.fillRect(10, 10, 100, 100)

ctx.strokeStyle ='red';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(10, 110);
ctx.stroke();

ctx.strokeStyle ='green';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(110, 10);
ctx.stroke();

ctx.strokeStyle ='blue';
ctx.beginPath();
ctx.moveTo(110, 10);
ctx.lineTo(110, 110);
ctx.stroke();

ctx.strokeStyle ='yellow';
ctx.beginPath();
ctx.moveTo(110, 110);
ctx.lineTo(10, 110);
ctx.stroke();

