'use srtict';

import { Plant } from './plant';

export class Tree extends Plant {

  constructor(color: string, typeOfPlant: string, needsWater?: boolean, absorbtionRate?: number){
    super(color,typeOfPlant,needsWater,absorbtionRate);

  }
}