'use strict';

//We are going to represent our products in a map where the keys are strings 
//representing the product's name and the values are numbers representing the product's price.
let productDatabase = {
  'Eggs': 200,
  'Milk':	200,
  'Fish':	400,
  'Apples': 150,
  'Bread': 50,
  'Chicken': 550
}

//Create an app wich solves the following problems:
//How much is the fish?
console.log(`The fish costs ${productDatabase['Fish']} forints.`);

//What is the average price?
let total: number = 0;
let counter: number = 0;
Object.keys(productDatabase).forEach((key) => {
  total += productDatabase[key];
  counter++;
});
console.log(`The average price is ${total/counter}`);

//How many products' price is below 300?
let below300: number = 0;
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] < 300) {
    below300++
  }
});
console.log(`There are ${below300} products below 300`);

//Is there anything we can buy for exactly 125?
let isThere: boolean = false;
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] === 125) {
    isThere = true;
    console.log(`We can buy ${key} for exactly 125.`);
}}); 

Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] !== 125) {
    isThere = false;
    console.log(`The ${key} is not exacly 125.`);
  }}); 

//Wich products cost less than 201? (names only)
let below201: string[] = [];
Object.keys(productDatabase).forEach((key) => {
 if (productDatabase[key] < 201) {
   below201.push(key);
 }
});
console.log(`These itmes are under 201: ${below201}.`);

//Wich products cost more than 150? (key+value)
let over150: string[] = [];
Object.keys(productDatabase).forEach((key) => {
  if (productDatabase[key] > 150) {
    over150.push(key, productDatabase[key]);
  }
});
console.log(`These items cost more than 150: ${over150}`);