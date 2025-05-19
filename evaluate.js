/**
 * Processes a string containing patterns like {STRINGLENGTH[text]}, {TRIM[text]}, {STRINGTOLOWER[text]}
 * and evaluates them according to their respective functions
 * @param {string} str - The input string
 * @returns {string} The evaluated string
 */

export function evaluate(str) {
  // Process until there are no more pattern matches
  let result = str;
  let prevResult;

  do {
    prevResult = result;

    // Process STRINGLENGTH
    result = processStringLength(result);

    // Process TRIM
    result = processStringToLower(result);
    result = processTrim(result);

    // Process STRINGTOLOWER

  } while (result !== prevResult); // Continue until no more changes are made

  return result;
}

/**
 * Processes {STRINGLENGTH[text]} patterns
 * @param {string} str - The input string
 * @returns {string} The processed string
 */
function processStringLength(str) {
  if (!str.includes("{STRINGLENGTH[")) {
    return str;
  }

  const regex = /{STRINGLENGTH\[(.*?)\]}/g;
  let result = str;
  let match;

  while ((match = regex.exec(str)) !== null) {
    const fullMatch = match[0];
    const innerText = match[1];
    const replacement = innerText.length.toString();
    result = result.replace(fullMatch, replacement);
  }

  return result;
}

/**
 * Processes {TRIM[text]} patterns
 * @param {string} str - The input string
 * @returns {string} The processed string
 */
function processTrim(str) {
  if (!str.includes("{TRIM[")) {
    return str;
  }

  const regex = /{TRIM\[(.*?)\]}/g;
  let result = str;
  let match;

  while ((match = regex.exec(str)) !== null) {
    const fullMatch = match[0];
    const innerText = match[1];
    const replacement = innerText.trim();
    result = result.replace(fullMatch, replacement);
  }

  return result;
}

/**
 * Processes {STRINGTOLOWER[text]} patterns
 * @param {string} str - The input string
 * @returns {string} The processed string
 */
function processStringToLower(str) {
  if (!str.includes("{STRINGTOLOWER[")) {
    return str;
  }

  const regex = /{STRINGTOLOWER\[(.*?)\]}/g;
  let result = str;
  let match;

  while ((match = regex.exec(str)) !== null) {
    const fullMatch = match[0];
    const innerText = match[1];
    const replacement = innerText.toLowerCase();
    result = result.replace(fullMatch, replacement);
  }

  return result;
}
