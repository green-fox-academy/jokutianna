'use strict';

import * as test from 'tape';
import {getUniqueCharacters} from './unique_characters';

test('should return split array with letters without special characters', t => {

  const test = 'anagrams!'
  const actual = (test.replace(/[^a-z]/g, '')).split('');
  const expected = [ 'a', 'n', 'a', 'g', 'r', 'a', 'm', 's' ];

  t.deepEqual(actual, expected);
  t.end();

});
 
test('should only bring back unique characters', t => {

  const test = 'anagram'
  const actual = getUniqueCharacters(test);
  const expected = ['n','g','r','m'];

  t.deepEqual(actual, expected);
  t.end();

});