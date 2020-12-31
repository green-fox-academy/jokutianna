'use strict';

export class Pirate {
  protected _name: string;
  protected _amountOfGold: number;
  protected _hP: number;
  protected _isCaptain: boolean;
  protected _hasWoodenLeg: boolean;

  constructor(name: string, amountOfGold: number, hP: number = 10, isCaptain: boolean, hasWoodenLeg: boolean) {
    this._name = name;
    this._amountOfGold = amountOfGold;
    this._hP = hP;
    this._isCaptain = isCaptain;
    this._hasWoodenLeg = hasWoodenLeg;
  }

  public get name(): string {
    return this._name;
  }

  public get amountOfGold(): number {
    return this._amountOfGold;
  }

  public get hP(): number {
    return this._hP;
  }

  public get isCaptain(): boolean {
    return this._isCaptain;
  }

  public get hasWoodenLeg(): boolean {
    return this._hasWoodenLeg;
  }

  public work(): void {
    if (this._isCaptain === true) {
      this._amountOfGold += 10;
      this._hP -= 10;
    } else {
      this._amountOfGold += 1;
      this._hP -= 1;
    }
  }

  public party(): void {
    if (this._isCaptain === true) {
      this._hP += 10;
    } else {
      this._hP += 1;
    }
  }

  public toString(): string {
    if (this._hasWoodenLeg === true) {
      return `Hello I'm ${this._name}. I have a wooden leg and ${this._amountOfGold} golds.`;
    } else {
      return `Hello I'm ${this._name}. I still have my real legs and ${this._amountOfGold} golds.`;
    }
  }
}