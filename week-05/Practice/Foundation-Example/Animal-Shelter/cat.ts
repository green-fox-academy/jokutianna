'use strict';

import { Animal } from './animal';

export class Cat extends Animal {

  constructor(nameOfAnimal: string = 'Cat', ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 7)){
    super(nameOfAnimal, ownerName, isHealthy, healCost);
  }
}

