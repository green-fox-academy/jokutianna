'use strict';

import { Pirate } from './pirate';
import { Ship } from './ship';

let Karcsi = new Pirate;

Karcsi.drinkSumRum();
Karcsi.howsItGoingMate();

console.log(Karcsi.die());
console.log(Karcsi.howsItGoingMate());

let bigShip = new Ship;
let smallShip = new Ship;

console.log(bigShip.fillShip());