'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

//Kell egy function ami csinál nekem 2 paraméterrel színes négyzetet középre

function drawMiddleSquare (x, color) {
    ctx.fillStyle = color;
    ctx.fillRect(300 - (x/2), 200 - (x/2), x, x);
}

//drawMiddleSquare (50, 'purple')

//Most meg kéne egy loop amivel magától változtatja a színeket

//Kéne egy listányi szín

let colors = ['purple', 'blue', 'orange', 'green'];

//Most meg kéne egy for loop erre

for (let i = 0; i < colors.length; i++) {
    let x = 20;
    drawMiddleSquare (250 - (x * i), colors[i]);
}


