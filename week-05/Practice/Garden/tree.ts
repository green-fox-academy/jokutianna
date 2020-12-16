'use srtict';

import { Plant } from './plant';

export class Tree extends Plant {

  constructor(typeOfPlant: string, needsWater: boolean, absorbtionRate: number){
    super(typeOfPlant,needsWater,absorbtionRate);

  }
}