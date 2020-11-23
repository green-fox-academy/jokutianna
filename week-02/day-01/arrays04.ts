'use strict';

//Compare length//

let firstList: number[] = [1, 2, 3];
let secondList: number[] = [4, 5];
if (secondList.length > firstList.length) {
    console.log('p2 is longer');
} else {
    console.log('p2 is not longer');
}

//Sum elments//

let numbers: number[] = [54, 23, 66, 12];
console.log(numbers[1] + numbers[2]);

//Swap//

let names: string[] = ['Arthur', 'Boe', 'Chloe'];
names[0] = names[2];
names[2] = names[0];
console.log(names);



