/**
 * Evaluates date expressions and returns formatted dates based on the current date
 * @param {string} expression - The date expression to evaluate (e.g. "{DATE}")
 * @returns {string} The formatted date string
 */
function evaluateDate(expression) {
  const currentDate = new Date();

  // Format day, month, and year with leading zeros when needed
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // Using template literals to format the date
  switch (expression) {
    case '{DATE}':
      return `${day}.${month}.${year}`;
    case '{TIME}':
      return `${hours}:${minutes}:${seconds}`;
    case '{DATETIME}':
      return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    case '{YEAR}':
      return `${year}`;
    case '{MONTH}':
      return `${month}`;
    case '{DAY}':
      return `${day}`;
    default:
      return 'Invalid date expression';
  }
}

/**
 * Tagged template function for processing date expressions
 * Based on MDN docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 *
 * @param {Array<string>} strings - The static parts of the template
 * @param {...any} expressions - The evaluated expressions interpolated in the template
 * @returns {string} The processed template with evaluated date expressions
 */
function date(strings, ...expressions) {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // Process each expression
  const processed = expressions.map((expr) => {
    // Check if the expression is a date placeholder object
    if (expr && typeof expr === 'object') {
      // Get the key from the object (should be the date expression)
      const key = Object.keys(expr)[0];

      if (key) {
        switch (key) {
          case '{DATE}':
            return `${day}.${month}.${year}`;
          case '{TIME}':
            return `${hours}:${minutes}:${seconds}`;
          case '{DATETIME}':
            return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
          case '{YEAR}':
            return `${year}`;
          case '{MONTH}':
            return `${month}`;
          case '{DAY}':
            return `${day}`;
          default:
            return expr;
        }
      }
    }
    // If it's not a date placeholder, return the expression as is
    return expr;
  });

  // Combine strings with processed expressions
  let result = strings[0];
  for (let i = 0; i < processed.length; i++) {
    result += processed[i] + strings[i + 1];
  }

  return result;
}

// Example usage
console.log(evaluateDate('{DATE}')); // Using the regular function
console.log(date`Today's date is ${{ '{DATE}': true }}`); // Using tagged template
console.log(
  date`Current time: ${{ '{TIME}': true }} on ${{ '{DATE}': true }}` // Using tagged template with mixed expressions
); // Mixed example

// Export as ES modules for Bun compatibility
export { evaluateDate, date };
