/** Justify a single line
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var justifyLine = function (words, maxWidth) {
  if (words.length == 1) {
      let str = words[0];
      for (i = str.length; i < maxWidth; i++) {
          str += " "
      }
      return str;
  }
  let str = []
  let strLength = 0;
  for (let i = 0; i < words.length; i++) {
      str.push(words[i]);
      strLength += words[i].length
      if (i != words.length - 1) {
          str.push(" ")
          strLength++;
      }

  }

  while (strLength < maxWidth) {
      for (let i = 1; i < str.length - 1; i += 2) {
          str[i] += " ";
          strLength++;
          if (strLength === maxWidth) {
              break;
          }
      }
  }

  return str.join("");
};

/** full justification of the text
* @param {string[]} words
* @param {number} maxWidth
* @return {string[]}
*/
var fullJustify = function (words, maxWidth) {
  let result = [];
  let currLine = [];
  let currWidth = 0;
  for (let i = 0; i < words.length; i++) {
      if (currWidth + currLine.length + words[i].length <= maxWidth) {
          currLine.push(words[i]);
          currWidth += words[i].length;
      } else {
          result.push(justifyLine(currLine, maxWidth));
          currLine = [words[i]];
          currWidth = words[i].length;
      }
  }

  let lastLine = currLine.join(" ");
  for (i = lastLine.length; i < maxWidth; i++) {
      lastLine += " "
  }

  result.push(lastLine);

  return result;
};
