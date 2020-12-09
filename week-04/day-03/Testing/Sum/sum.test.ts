'use strict';
import * as test from 'tape';
import {SumExercise} from './sum';

test('sum array if empty', t => {
  let myList = new SumExercise();

  const actual = myList.sum();
  const expected = 0;

  t.equal(actual, expected);
  t.end();
})