// filepath: /Users/y.fotul/Projects/Tricentis/github/code-retread-session/date-formatter-example.js

import { evaluateDate, date } from './evaluate-date.js';

console.log('===== Basic Function Examples =====');
console.log(`Date: ${evaluateDate('{DATE}')}`);
console.log(`Time: ${evaluateDate('{TIME}')}`);
console.log(`DateTime: ${evaluateDate('{DATETIME}')}`);
console.log(`Year: ${evaluateDate('{YEAR}')}`);
console.log(`Month: ${evaluateDate('{MONTH}')}`);
console.log(`Day: ${evaluateDate('{DAY}')}`);

console.log('\n===== Tagged Template Examples =====');
console.log(date`Today's date is ${{'{DATE}': true}}`);
console.log(date`The time is now ${{'{TIME}': true}}`);
console.log(date`Report generated on ${{'{DATE}': true}} at ${{'{TIME}': true}}`);

// Mixing regular variables with date expressions
const userName = 'John Doe';
const items = 42;
console.log(date`User ${userName} viewed ${items} items on ${{'{DATE}': true}}`);

// Using in a function
function createReport(title, author) {
  return date`
=== ${title} ===
Author: ${author}
Generated: ${{'{DATETIME}': true}}
  `;
}

console.log('\n===== Function Example =====');
console.log(createReport('Monthly Sales', 'Finance Team'));

// Using with conditional logic
const isUrgent = true;
console.log(date`
Status: ${isUrgent ? 'URGENT' : 'Normal'}
Created: ${{'{DATE}': true}}
Due: ${isUrgent ? 'Immediate action required' : 'Within 5 business days'}
`);

// Run with: node date-formatter-example.js