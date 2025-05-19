/*
 * @param {string} str - The input string
 * @returns {number|string} The length of the string inside brackets or the original string
 */

const STRING_START = '{STRINGLENGTH[';
const STRING_END = ']}';
const TRIM_START = '{TRIM[{STRINGTOLOWER[';

function getStringStartAndEndIndex(str, stringStart) {
  const startIndex = str.indexOf(stringStart) + stringStart.length;
  const endIndex = str.indexOf(STRING_END, startIndex);
  return { endIndex, startIndex };
}

const stringLength = (str) => {
  let stringLength = '0';

  const { endIndex, startIndex } = getStringStartAndEndIndex(str, STRING_START);

  if (endIndex !== -1) {
    const innerText = str.substring(startIndex, endIndex);
    stringLength = innerText.length.toString();
  }

  return stringLength;
};

const lowerCaseString = (str) => {
  const { endIndex, startIndex } = getStringStartAndEndIndex(str, TRIM_START);

  if (endIndex !== -1) {
    const innerText = str.substring(startIndex, endIndex);
    return innerText.trim().toLowerCase();
  }
  return str;
};

export function evaluate(str) {
  if (str.includes(STRING_START)) {
    return stringLength(str);
  }

  if (str.includes(TRIM_START)) {
    return lowerCaseString(str);
  }

  return str;
}
