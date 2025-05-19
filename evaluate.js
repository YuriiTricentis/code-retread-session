/**
 * Evaluates a template string, replacing STRINGLENGTH tokens with the length of the referenced variable
 * @param {string} template - The template string containing tokens to be replaced
 * @param {Object} variables - Key-value pairs of variables to use for replacement
 * @returns {string} The evaluated string with tokens replaced
 */
export function evaluate(template, variables = {}) {
  // If there are no variables or the template doesn't contain any tokens, return the template as is
  if (!variables || !template.includes("{STRINGLENGTH[")) {
    return template;
  }

  // Regular expression to match STRINGLENGTH tokens in the format {STRINGLENGTH[variableName]}
  const tokenRegex = /\{STRINGLENGTH\[(.*?)\]\}/g;

  // Replace all matching tokens with the length of the referenced variable
  return template.replace(tokenRegex, (match, variableName) => {
    // If the variable name is missing or not in variables, return 0
    if (!variableName || !variables[variableName]) {
      return "0";
    }

    // Return the length of the referenced variable
    return variables[variableName].length.toString();
  });
}