'use srtict';

import { Plant } from './plant';

export class Flower extends Plant {

  constructor(typeOfPlant: string, needsWater: boolean, absorbtionRate: number){
    super(typeOfPlant,needsWater,absorbtionRate);

  }
}