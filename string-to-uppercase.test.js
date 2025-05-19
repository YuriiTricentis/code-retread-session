import { expect, test } from 'bun:test';

import { toUpperCase } from './string-to-uppercase.js';

test('toUpperCase {STRINGTOUPPER[hello]}', () => {
  // Test with a string containing STRINGTOUPPER token
  expect(toUpperCase('{STRINGTOUPPER[hello]}')).toBe('HELLO');
});
