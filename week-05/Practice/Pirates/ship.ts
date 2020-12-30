'use strict';

import { Pirate } from './pirate';

export class Ship {
  protected _crew: Pirate[] = [];
  protected _hasCaptain: boolean;

  constructor(crew: Pirate[] = [], hasCaptain: boolean = false){
    this._crew = crew;
    this._hasCaptain = hasCaptain;
  }

  public fillShip(pirate: Pirate) {
    //random number?
    this._crew.push(pirate);
    return this._crew.length;
  }
}