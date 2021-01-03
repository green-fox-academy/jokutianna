'use strict';

let testMatrix: number [][] = 
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

//Első rotate verzió
function rotateMatrix(inputMatrix: number[][]){
  let newMatrix: number[][] = [];
  for (let i: number = 0; i < inputMatrix.length; i++) {
    newMatrix.push([]);
    for (let j: number = inputMatrix[i].length -1; j >= 0; j--) {
      newMatrix[i].push(inputMatrix[j][i])
    }
  }
  return newMatrix;
}

//Második rotate verzió
function rotate2Matrix(matrix: number[][]) {
  let newMatrix: number[][] = [];
  for( let i:number = 0; i < matrix.length; i++) {
    newMatrix.push([]);
    for( let j:number = 0; j< matrix[i].length; j++) {
      newMatrix[i].push(matrix[(matrix[i].length-1)-j][i])
    }
  }
  return newMatrix
}


//console.log(rotateMatrix(testMatrix));

//sorok elemeinek megfordítása
function moveMatrix(inputMatrix: number[][]){
  let newMatrix: number[][] = [];
  for (let i: number = 0; i < inputMatrix.length; i++) {
    newMatrix.push([]);
    for (let j: number = inputMatrix[i].length -1; j >= 0; j--) {
      newMatrix[i].push(inputMatrix[i][j]); //321,654,987
    }
  }
  return newMatrix;
}
console.log(moveMatrix(testMatrix));


//Fordított számozás 
function changeMatrix (matrix: number[][]) {
  let newmatrix: number[][] = []
  for (let i: number = 0; i < matrix.length; i++) {
    newmatrix.push([]);
    for (let j: number = 0; j < matrix[i].length; j++) {
        newmatrix[i].unshift(matrix[(matrix.length-1)-i][j]);
      }
    }
    return newmatrix
}

console.log(changeMatrix(testMatrix));
