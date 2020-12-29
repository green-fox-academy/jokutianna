'use strict';

//Create a list with the following items.
let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

/*Create an application which solves the following problems.
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings?
*/

function application (listOfExpenses: number[]): void {

  let application = {
  
  "amount spent": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue  }, 0),

  "greatest expense": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return Math.max(accumulator, currentvalue)
  }, 0),

  "cheapest expense": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return Math.min(accumulator, currentvalue)
  }, 0),

  "average expense": listOfExpenses.reduce(function (accumulator, currentvalue) {
    return (accumulator + currentvalue) }, 0)/expenses.length
  }
    
  Object.keys(application).forEach(key => {
    console.log(`${key} : ` + application[key]);
  });
}

application(expenses);