import { expect, test } from 'bun:test';

import { toUpperCase } from './string-to-uppercase.js';

test('toUpperCase {STRINGTOUPPER[hello]}', () => {
  // Test with a string containing STRINGTOUPPER token
  expect(toUpperCase('{STRINGTOUPPER[hello]}')).toBe('HELLO');
});

test('toUpperCase {STRINGTOUPPER[hello]} with other text', () => {
  // Test with a string containing STRINGTOUPPER token
  expect(toUpperCase('This is a test {STRINGTOUPPER[hello]}')).toBe('THIS IS A TEST HELLO');
});

test('toUpperCase {STRINGTOUPPER[hello]} with other text on end', () => {
  // Test with a string containing STRINGTOUPPER token
  expect(toUpperCase('{STRINGTOUPPER[hello]} this is a test')).toBe('HELLO THIS IS A TEST');
});

test('toUpperCase {STRINGTOUPPER[hello]} with other text on end and start', () => {
  // Test with a string containing STRINGTOUPPER token
  expect(toUpperCase('This is a test {STRINGTOUPPER[hello]} this is a test')).toBe('THIS IS A TEST HELLO THIS IS A TEST');
});