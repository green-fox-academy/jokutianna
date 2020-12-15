'use strict';

// Boilerplate//
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');


//Function: drawSquare: fix size, changing position


function drawSquare (positionWidth, positionHeight) {
    ctx.fillStyle = 'black';
    let size = 100;
    ctx.fillRect(positionWidth, positionHeight, 100, 100);
}

//Function: Draw row
 let positionWidth = 0;
 let positionHeight = 0;
function drawRow () {
    for (let i =0; i < 2; i++){
        positionWidth = positionWidth + 200;
        positionHeight = 0;
        drawSquare(positionWidth, positionHeight)
    }
}