'use strict';
//Examples Exercises//

class Human {
    name: string;
    age: number;
    iq: number;
  
    constructor(name: string = 'unknown', age: number = 0, iq: number = 0) {
      this.name = name;
      this.age = age;
      this.iq = iq;
    }
  
    public isSmart(): boolean {
      return this.iq > 100;
    }
}