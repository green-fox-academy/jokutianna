'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(295, 195);
ctx.lineTo(305, 195);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(305, 195);
ctx.lineTo(305, 205);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(305, 205);
ctx.lineTo(295, 205);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(295, 205);
ctx.lineTo(295, 195);
ctx.stroke();