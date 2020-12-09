'use strict';
export class SumExercise {
  public _list: number[]=[];

  constructor(list?: number []){
    this._list = list ?? [];
  }

  public sum(): number {
    let sumOf: number = 0;
    for (let i=0; i < this._list.length; i++){
      sumOf += this._list[i];
    }
    return sumOf;
  }

}