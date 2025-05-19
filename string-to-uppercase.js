export function toUpperCase(str) {
  let cleanStr = str;
  do {
    // Replace the {STRINGTOUPPER[...]} with the content inside
    cleanStr = cleanStr.replace(/{STRINGTOUPPER\[(.*?)\]}/g, '$1');
  } while (cleanStr.includes('{STRINGTOUPPER['));
  // cleanStr = cleanStr.replaceAll(/{STRINGTOUPPER\[(.*?)\]}/g, '$1');
  if (typeof cleanStr !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Convert the string to uppercase
  return cleanStr.toUpperCase();
}