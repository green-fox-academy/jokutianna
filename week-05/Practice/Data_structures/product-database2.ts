'use strict';

//Our object is a product database
let productDataBase = {
  'Eggs': '200',
  'Milk': '200',
  'Fish': '400',
  'Apples': '150',
  'Bread': '50',
  'Chicken': '550'
}

//Create an app wich contains:
//Which products cost less than 222? (just the name)
let below222: string[] = [];
Object.keys(productDataBase).forEach((key) => {
  if (productDataBase[key] < 222) {
    below222.push(key, productDataBase[key]);
  }
});
console.log(`These items are under 222: ${below222}`)

//Which products cost more than 144? (name + price)
let over144: string[] = [];
Object.keys(productDataBase).forEach((key) => {
  if (productDataBase[key] > 144) {
    over144.push(key, productDataBase[key]);
  }
});
console.log(`These items cost more than 144: ${over144}`);