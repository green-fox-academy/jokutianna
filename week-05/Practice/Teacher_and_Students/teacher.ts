'use strict';

import { Student } from './student';

export class Teacher {

  constructor () {}

  public teach (student: Student) {
    return student.learn();
  }

  public answer () {
    console.log(`The teacher is answering the question.`);
  }
}