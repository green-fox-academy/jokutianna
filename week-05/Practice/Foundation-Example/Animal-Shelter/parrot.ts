'use strict';

import { Animal } from './animal';

export class Parrot extends Animal {

  constructor(nameOfAnimal: string = 'Parrot', ownerName: string, isHealthy: boolean, healCost: number = Math.floor(Math.random() * 10) +4){
    super(nameOfAnimal, ownerName, isHealthy, healCost);
  }
}