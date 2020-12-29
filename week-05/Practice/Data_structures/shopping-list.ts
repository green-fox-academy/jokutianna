'use strict';

//We are going to represent a shopping list in a list containing strings
let shoppingList: string[] = ['eggs', 'milk', 'fish', 'apples', 'bread', 'chicken' ];

//Create an app wich solves the following problems:
//Do we have milk on the list?
if (shoppingList.indexOf('milk') !== 1) {
  console.log(`The list does not include milk.`);
} else {
  console.log(`The list includes milk.`)
}

//Do we have bananas on the list?
if (shoppingList.indexOf('bananas') === -1) {
  console.log(`The list does not include bananas.`);
} else {
  console.log(`The list includes bananas. It's the ${shoppingList.indexOf('bananas')}th item. `);
}