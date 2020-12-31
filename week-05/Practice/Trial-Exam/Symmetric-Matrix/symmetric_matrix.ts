'use strict';

let testMatrix1: number [][] = 
[
  [1, 0, 1],
  [0, 2, 2],
  [1, 2, 5]
];

let testMatrix2: number [][] =
[
  [7, 7, 7],
  [6, 5, 7],
  [1, 2, 1]
];

function isSymmetric (inputMatrix: number [][]): boolean {
  for (let i: number = 0; i < inputMatrix.length; i++) {
    for (let j: number = 0; j < inputMatrix[i].length; j++) {
      if (inputMatrix[i][j] !== inputMatrix[j][i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSymmetric(testMatrix1));
console.log(isSymmetric(testMatrix2));