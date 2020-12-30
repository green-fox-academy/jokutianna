'use strict';

export class Pirate {
  protected _drunkness: number;
  protected _isAlive: boolean;
  protected _isCaptain: boolean;

  constructor(drunkness: number = 0, isAlive: boolean = true, isCaptain: boolean = false){
    this._drunkness = drunkness;
    this._isAlive = isAlive;
    this._isCaptain = this._isCaptain;
  }
  
  public drinkSumRum() {
    this._drunkness =+ 1;
    return this._drunkness;
  }

  public howsItGoingMate() {
    if (this._isAlive) {
      if (this._drunkness <= 4) {
        console.log(`Pour me anuder!`);
      } else {
        console.log(`Arghh, I'm a Pirate. How d'ya d'ink its going?`);
        console.log(`I'm passed out.`)
      }
    } else {
      this._isAlive === false;
      return `He's dead.`
    }
  }

  public die() {
    this._isAlive = false;
    return `He's dead.`;
  }
}