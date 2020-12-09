'use strict';
import * as test from 'tape';
import {Apple} from './apple';

test('should return apple', t => {
  let myObject = new Apple();

  const actual = myObject.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();

})