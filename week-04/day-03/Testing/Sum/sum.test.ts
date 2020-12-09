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

test('sum array if there is only one item', t => {
  let myList = new SumExercise();
  myList._list.push(1);

  const actual = myList.sum();
  const expected = 1;

  t.equal(actual, expected);
  t.end();
})


test('sum array if there are multiple items', t => {
  let myList = new SumExercise();
  myList._list.push(4, 3, 2);

  const actual = myList.sum();
  const expected = 9;

  t.equal(actual, expected);
  t.end();
})