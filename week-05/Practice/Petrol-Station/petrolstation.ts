'use strict';
import { Station } from './station';
import { Car } from './car';

let shell = new Station(500);
let suzuki = new Car();

shell.refill(suzuki);
console.log(shell);
console.log(suzuki);