'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(300, 200);
ctx.stroke();

function drawLine (x, y) {
    ctx.beginPath();    
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
//drawLine (15, 60);
//drawLine (30, 130);
//drawLine (200, 100);
//drawLine (90, 60);

for (let i = 0; i < 3; i++) {
  drawLine(i * 10, i * 30);
}