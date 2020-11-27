'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawCenteredSquare (x) {
    ctx.strokeRect(300-(x/2), 200-(x/2) , x, x);
}
drawCenteredSquare(10);
drawCenteredSquare(30);
drawCenteredSquare(50);

