'use strict';

export class Animal {
  protected _nameOfAnimal: string;
  protected _ownerName: string;
  protected _isHealthy: boolean;
  protected _healCost: number;

  constructor(nameOfAnimal: string = 'Animal', ownerName: string, isHealthy: boolean, healCost: number){
    this._nameOfAnimal = nameOfAnimal
    this._ownerName = ownerName;
    this._isHealthy = isHealthy;
    this._healCost = healCost;
  }

  public get isHealthy(){
    return this._isHealthy;
  }

  public set isHealthy(isHealthy: boolean){
    this._isHealthy = isHealthy;
  }

  public get healCost(){
    return this._healCost;
  }

  public heal(): boolean{
    this._isHealthy = true;
    return this._isHealthy;
  }

  public isAdoptable(): boolean{
    if (this._isHealthy === true) {
      return true;
    } else {
      return false;
    }
  }

  public toString(): void{
    if (this._isHealthy === false) {
      console.log(`${this._nameOfAnimal} is not healthy (${this._healCost}€), and not adoptable.`);
    } else {
      console.log(`${this._nameOfAnimal} is healthy, and adoptable.`);
    }
  }

}