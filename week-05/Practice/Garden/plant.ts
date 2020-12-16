'use strict';

export class Plant {
  protected _typeOfPlant: string;
  protected _needsWater: boolean;
  protected _absorbtionRate: number;

  constructor(typeOfPlant: string, needsWater: boolean, absorbtionRate: number){
    this._typeOfPlant = typeOfPlant;
    this._needsWater = needsWater;
    this._absorbtionRate = absorbtionRate;
  }

}