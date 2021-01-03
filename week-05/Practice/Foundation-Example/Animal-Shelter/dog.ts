'use strict';

import { Animal } from './animal';

export class Dog extends Animal {

  constructor(nameOfAnimal: string = 'Dog', ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 8) +1){
    super(nameOfAnimal, ownerName, isHealthy, healCost);
  }
}