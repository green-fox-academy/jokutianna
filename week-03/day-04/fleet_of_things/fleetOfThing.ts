'use strict';
import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Create a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

console.log(fleet.toString());

//The "things":

let thingOne = new Thing('Get milk');
let thingTwo = new Thing('Remove the obstacles');
let thingThree = new Thing('Stand up')
let thingFour = new Thing('Eat lunch');

//I want to .push this to the fleet

fleet.add(thingOne);
fleet.add(thingTwo);
fleet.add(thingThree);
fleet.add(thingFour);

//Complete 

thingThree.complete();
thingFour.complete();

fleet.getThings();

console.log(fleet.toString());
