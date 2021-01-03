'use strict';

import { Adopter } from './adopter';
import { Animal } from './animal';

export class AnimalShelter {
  protected _budget: number;
  protected _animals: Animal[];
  protected _adpoters: Adopter[];

  constructor(budget: number = 50, animals: Animal[] = []){
    this._budget = budget;
    this._animals = animals = [];
  }

  public rescue(animal: Animal): number {
    this._animals.push(animal);
    return this._animals.length;
  }

  public healAnimals(): number {
    let counter = 0
    for(let i = 0; i < this._animals.length;i++) {
      if (this._animals[i].isHealthy === false && this._budget > this._animals[i].healCost) {
        this._animals[i].isHealthy = true
        this._budget -= this._animals[i].healCost
        counter += 1
      } else {
      }
    } 
    return counter;
  }

  public earnDonation(amount: number): number {
    this._budget += amount;
    return this._budget;
  }

  public addAdopter(adopter: Adopter): Adopter[] {
    this._adpoters.push(adopter);
    return this._adpoters;
  }

  public findOwner(){}
}
