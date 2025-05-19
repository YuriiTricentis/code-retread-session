import { expect, test } from 'bun:test';

test('toUpperCase {STRINGTOUPPER[hello]}', () => {
  // Test with a string containing STRINGTOUPPER token
  expect(toUpperCase('{STRINGTOUPPER[hello]}')).toBe('HELLO');
});
