'use strict';
//class named Sharpie

class Sharpie{
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100){
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }

    use(): void{
        this.inkAmount -= 5;
        console.log(this.inkAmount);
    }
}

let mySharpie = new Sharpie('pink', 5,);
mySharpie.use();