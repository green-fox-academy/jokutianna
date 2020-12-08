'use strict';
import {StringedInstrument} from './stringed_instruments';
export class Violin extends StringedInstrument {

  constructor(name: string = 'Violin', numberOfString: number = 4){
    super(name, numberOfString);
  }

  public sound(): string{
    return 'Screech';
  }
}