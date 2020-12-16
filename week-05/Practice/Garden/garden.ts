'use strict';

import { Plant } from './plant';

export abstract class Garden {
  protected _plantsOfGarden: Plant[];

  constructor(){
    this._plantsOfGarden = [];
  }
}