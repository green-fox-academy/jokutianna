'use strict';
import {StringedInstrument} from './stringed_instruments';
export  class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6, name: string = 'Electric Guitar'){
    super(name, numberOfStrings);
  }

  public sound(): string{
    return 'Twang';
  }

}