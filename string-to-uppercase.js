export function toUpperCase(str) {
  // Check if the input is a string

  let cleanStr = str.replace(/{STRINGTOUPPER\[(.*?)\]}/g, '$1');

  if (cleanStr.includes('{STRINGTOUPPER[')) {
    return cleanStr;
  }

  if (typeof cleanStr !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Convert the string to uppercase
  return cleanStr.toUpperCase();
}
