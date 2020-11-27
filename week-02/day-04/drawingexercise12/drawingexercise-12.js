'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//Lila négyzet, fix méret, ismeretlen pozícióval

//ctx.fillStyle = 'purple';
//ctx.fillRect(x, x, 30, 30);

//Function

function drawSquare (x) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, x, 30, 30);
}

//for loop hogy lépcső legyen

for (let i = 1; i < 10; i++) {
    let x = 30;
    drawSquare (x * i, x * i, 30, 30);
}