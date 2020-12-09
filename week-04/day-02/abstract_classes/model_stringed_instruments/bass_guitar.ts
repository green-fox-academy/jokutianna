'use strict';
import {StringedInstrument} from './stringed_instruments';
export class BassGuitar extends StringedInstrument {

  constructor(numberOfString: number = 4, name: string = 'Bass Guitar'){
    super(name, numberOfString);
  }

  public sound(): string {
    return 'Duum-duum-duum';
  }
}