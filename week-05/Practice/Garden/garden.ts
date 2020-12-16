'use strict';

import { Plant } from './plant';

export class Garden {
  protected _plantsOfGarden: Plant[];

  constructor(){
    this._plantsOfGarden = [];
  }

  public addPlant(plant: Plant): void {
    this._plantsOfGarden.push(plant);
  }
}