'use strict';

import { Garden } from './garden';

export class Plant {
  protected _color: string;
  protected _typeOfPlant: string;
  protected _needsWater: boolean;
  protected _absorbtionRate: number;

  constructor(color: string, typeOfPlant: string, needsWater?: boolean, absorbtionRate?: number){
    this._color = color;
    this._typeOfPlant = typeOfPlant;
    this._needsWater = needsWater;
    this._absorbtionRate = absorbtionRate;
  }

 public toString(): string {
   return `There is a ${this._color} ${this._typeOfPlant} in my garden.`;
 }
}