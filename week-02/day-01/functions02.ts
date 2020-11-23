'use strict';

//Function arguments//

function greetByName(name: string) {
    console.log(arguments);
    console.log('Well hi there,', name);
}
greetByName('Tojás');
greetByName('Barbi');

//Default values for function arguments//

function greet(greet = 'Hi', name = 'pal') {
console.log(greet, name);
}
greet('Hey');
greet('Hello', 'Tojás');

