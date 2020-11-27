'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


//function: ismeretlen pozi és méret
function drawDynamicSquare (x, y) {
    ctx.fillStyle = 'pink';
    ctx.fillRect(x, x, y, y);
}

//for loop: arányosan nőjön x és y

let size = 0;
let position = 0;
for (let i = 1; i < 8; i++) {
    position = size + position;
    size = i * 10;
    drawDynamicSquare(position, size)
}