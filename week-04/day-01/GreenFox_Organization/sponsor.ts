'use strict';
import {Person} from './person';
export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company: string = 'Google', hiredStudents: number = 0){
    super(name, age, gender);
    this._company= company;
    this._hiredStudents= hiredStudents;
  }

  public introduce(): void{
    console.log(`Hi, I'm ${this._name}, a ${this._age} years old ${this._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`);
  }

  public hire(): void{
    this._hiredStudents= this._hiredStudents ++;
    console.log(this._hiredStudents);
  }

  public getGoal(): void{
    console.log('My goal is: Hire brilliant junior software developers.');
  }
}