'use strict';

class Animal{
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50){
        this.hunger = hunger;
        this.thirst = thirst;
    }
    eat(): void{
        this.hunger -= 1;
        console.log(this.hunger);
    }
    drink(): void{
        this.thirst -= 1;
        console.log(this.thirst);
    }
    play(): void{
        this.hunger += 1;
        this.thirst += 1;
        console.log (this.hunger, this.thirst);
    }
}

let cow = new Animal();
cow.eat();
cow.drink();
cow.play();
