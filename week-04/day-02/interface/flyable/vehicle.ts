'use strict';
export abstract class Vehicle{
  protected _color: string;
  protected _brand: string;
  protected _madeIn: number;

  constructor(color: string, brand: string, madeIn: number){
    this._color= color;
    this._brand= brand;
    this._madeIn= madeIn;
  }
}