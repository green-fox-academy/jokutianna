'use strict';
 
import { Teacher } from './teacher';

export class Student {

  constructor() {}

  public learn () {
    console.log(`The student is learning something new.`);
  }

  public question (teacher: Teacher) {
    return teacher.answer();
  }
}