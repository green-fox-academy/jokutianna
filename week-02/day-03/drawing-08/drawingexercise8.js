'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Draw four different size and color rectangles.
// Avoid code duplication.

let colors = ['red', 'blue', 'green', 'purple']
for (let i = 0; i < colors.length ; i++){
    ctx.fillStyle = colors[i];
    ctx.fillRect(i * 30, i * 30, i * 40, i * 50);
  }