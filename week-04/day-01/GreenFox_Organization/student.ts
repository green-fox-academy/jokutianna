'use strict';
import {Person} from './person';
export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;

  constructor(name?: string, age?: number, gender?: string, previousOrganization: string ='The Cshool of Life', skippedDays: number = 0){
    super(name, age, gender);
    this._previousOrganization= previousOrganization;
    this._skippedDays= skippedDays;
  }

  public getGoal(): void{
    console.log('My goal is: Be a Junior software developer.');
  }

  public introduce(): void{
    console.log(`Hi I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`);
  }

  public skipDays(numberOfDays: number): void{
    this._skippedDays = this._skippedDays + numberOfDays;
    console.log(this._skippedDays);
  }
}