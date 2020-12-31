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
        console.log(`We can only have a single captain, yarrr!`);
      } else {
        this._crew.push(pirate);
        this._hasCaptain = true;
      }
    }
  }

  public getGolds(): number {
    let crewGold: number = 0
    this._crew.forEach (pirate => {
      crewGold += pirate.amountOfGold;
    });
    return crewGold;
  }

  public lastDayOnTheShip(): void {
    this._crew.forEach (pirate => {
      pirate.party();
    })
  }

  //Ezt nem értem (this.lastDayOnTheShip?)
  public prepareForBattle(): void {
    this._crew.forEach (pirate => {
      for (let i: number = 0; i <= 5; i++) {
        pirate.work();
      }
    });
    this.lastDayOnTheShip();
  }

  getPoorPirates(): string[] {
    let poorPiratesList: string[] = [];

    poorPiratesList = this._crew.map(pirate => {
      if (pirate.amountOfGold < 15 && pirate.hasWoodenLeg) {
        return pirate.name;
      }
    });
    return poorPiratesList;
  }
}