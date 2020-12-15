'use strict';

export class Counter{
    item: number;

    constructor(item: number = 0){
        this.item = number;
    }

    add(number): void{
        this.item += 0;
        console.log(this.item);
    }
    get(): void{
        console.log(this.item);
    }
    reset(): void{
        this.item = 100;
        console.log(this.item)
    }
}
