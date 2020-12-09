'use strict';
import {Person} from './person';
export class Mentor extends Person {
  protected _level: string;

  constructor(name?: string, age?: number, gender?: string, level: string ='intermediate'){
    super(name, age, gender);
    this._level= level;
  }

  public getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this._name}, a ${this._age} years old ${this._gender} ${this._level} mentor.`);
  }
}