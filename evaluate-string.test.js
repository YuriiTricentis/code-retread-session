import { expect, test } from 'bun:test';

// Import the function to test (assuming it exists or will be created)
import { evaluate } from './evaluate-string';

test('evaluate a plain text ', () => {
  // Test with a normal string
  expect(evaluate('Hello')).toBe('Hello');
});

test("evaluate STRINGLENGTH", () => {
  // Test with a string containing STRINGLENGTH token
  expect(evaluate("{STRINGLENGTH[InputText]}")).toBe("9");

});

test("evaluate {TRIM[{STRINGTOLOWER[ HELLO]}]}", () => {
  // Test with a string containing STRINGLENGTH token
  expect(evaluate("{TRIM[{STRINGTOLOWER[ HELLO]}]}")).toBe("hello");

});