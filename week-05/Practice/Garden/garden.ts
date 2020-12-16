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

  public getPlants(): Plant[] {
    return this._plantsOfGarden;
  }

  public toString(): void {
    for (let i: number = 0; i < this._plantsOfGarden.length; i++){
      let plantInfo = this._plantsOfGarden[i].toString();
      console.log(plantInfo);
    }
  }
}
