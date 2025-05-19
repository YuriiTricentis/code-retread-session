export function toUpperCase(str) {
  // Check if the input is a string
  str = str.replace(/{STRINGTOUPPER\[(.*?)\]}/g, '$1');
  if (str.includes('{STRINGTOUPPER[')) {
    return str;
  }

  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Convert the string to uppercase
  return str.toUpperCase();
}
