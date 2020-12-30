'use strict';

import { Pirate } from './pirate';

export class Ship {
  protected _crew: Pirate[] = [];
  protected _hasCaptain: boolean;

  constructor(crew: Pirate[] = [], hasCaptain: boolean = false){
    this._crew = crew;
    this._hasCaptain = hasCaptain;
  }

  public fillShip() {
    for(let i: number = 0; i < Math.floor(Math.random()*10); i++) {
      this._crew.push(new Pirate());
    }
    return this._crew.length
  }
}