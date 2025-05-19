import { expect, test } from "bun:test";

// Import the function to test (assuming it exists or will be created)
import { evaluate } from "./evaluate";


test("evaluate a plain text ", () => {
  // Test with a normal string
  expect(evaluate("Hello")).toBe("Hello");
});

test("evaluate STRINGLENGTH token replacement", () => {
  // Test with a string containing STRINGLENGTH token
  expect(evaluate("The length is {STRINGLENGTH[InputText]}", { InputText: "Hello" })).toBe("The length is 5");
  expect(evaluate("Length: {STRINGLENGTH[InputText]}", { InputText: "" })).toBe("Length: 0");
  expect(evaluate("{STRINGLENGTH[InputText]}", { InputText: "12345" })).toBe("5");
  expect(evaluate("Start {STRINGLENGTH[InputText]} End", { InputText: "Test String" })).toBe("Start 11 End");

  // Test with multiple tokens
  expect(evaluate("{STRINGLENGTH[First]} and {STRINGLENGTH[Second]}", { First: "Hello", Second: "World" }))
    .toBe("5 and 5");
});

test("validate STRINGLENGTH token format", () => {
  // Test that the token format is correctly recognized
  expect(evaluate("{STRINGLENGTH[InputText]}", { InputText: "test" })).toBe("4");

  // Test with malformed tokens (these should not be replaced)
  expect(evaluate("{STRINGLENGTH(InputText)}", { InputText: "test" })).toBe("{STRINGLENGTH(InputText)}");
  expect(evaluate("{STRINGLENGTH InputText}", { InputText: "test" })).toBe("{STRINGLENGTH InputText}");
  expect(evaluate("{STRINGLENGTH}", { InputText: "test" })).toBe("{STRINGLENGTH}");

  // Test with non-existent variable in token
  expect(evaluate("{STRINGLENGTH[Missing]}", { InputText: "test" })).toBe("0");

  // Test with empty token parameter
  expect(evaluate("{STRINGLENGTH[]}", { InputText: "test" })).toBe("0");
});