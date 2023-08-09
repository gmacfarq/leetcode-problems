/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
      return false;
  }

  let sChars = {};
  let tChars = {};

  for (let i = 0; i < s.length; i++) {
      let sChar = s[i];
      let tChar = t[i];

      if (!sChars[sChar] && !tChars[tChar]) {
          sChars[sChar] = tChar;
          tChars[tChar] = sChar;
      } else if (sChars[sChar] !== tChar || tChars[tChar] !== sChar) {
          return false;
      }
  }

  return true;
};