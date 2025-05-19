# Date Expression Formatter

This library provides tools for formatting date expressions in JavaScript, using both regular function calls and tagged template literals.

## Features

- Format date expressions like `{DATE}`, `{TIME}`, `{DATETIME}`, etc.
- Use function calls or tagged template literals for date formatting
- Full test suite included

## Regular Function Usage

```javascript
import { evaluateDate } from './evaluate-date.js';

// Get formatted date
console.log(evaluateDate('{DATE}'));       // 30.12.2015
console.log(evaluateDate('{TIME}'));       // 15:09:00
console.log(evaluateDate('{DATETIME}'));   // 30.12.2015 15:09:00
console.log(evaluateDate('{YEAR}'));       // 2015
console.log(evaluateDate('{MONTH}'));      // 12
console.log(evaluateDate('{DAY}'));        // 30
```

## Tagged Template Literals Usage

```javascript
import { date } from './evaluate-date.js';

// Basic usage
console.log(date`Today's date is ${{'{DATE}': true}}`);
// Output: Today's date is 30.12.2015

// Multiple date expressions
console.log(date`Date: ${{'{DATE}': true}} and time: ${{'{TIME}': true}}`);
// Output: Date: 30.12.2015 and time: 15:09:00

// Mixing with regular template variables
const reportName = 'Monthly Report';
console.log(date`${reportName} generated on ${{'{DATE}': true}}`);
// Output: Monthly Report generated on 30.12.2015
```

## Testing

Run the test suite with Bun:

```bash
bun test
```

Bun's testing framework provides fast, modern testing with a Jest-like API. Learn more at [Bun's testing documentation](https://bun.sh/docs/cli/test).

## Reference

Available date expressions:

| Expression  | Description         | Example Output      |
|-------------|---------------------|---------------------|
| `{DATE}`    | Full date           | 30.12.2015          |
| `{TIME}`    | Time                | 15:09:00            |
| `{DATETIME}`| Date and time       | 30.12.2015 15:09:00 |
| `{YEAR}`    | Current year        | 2015                |
| `{MONTH}`   | Current month       | 12                  |
| `{DAY}`     | Current day         | 30                  |