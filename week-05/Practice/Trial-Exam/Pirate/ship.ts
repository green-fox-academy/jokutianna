'use strict';

import { Pirate } from './pirate';

export class Ship {
  protected _crew: Pirate[];
  protected _hasCaptain: boolean;

  constructor(crew: Pirate[], hasCaptain: boolean) {
    this._crew = crew = [];
    this._hasCaptain = hasCaptain;
  }

  public addPirate (pirate: Pirate): void {
    if (pirate.isCaptain === false) {
      this._crew.push(pirate);
    } else {
      if (this._hasCaptain  === true) {
        console.log(`We cab only have a single captain, yarrr!`);
      } else {
        this._crew.push(pirate);
        this._hasCaptain = true;
      }
    }
  }

}