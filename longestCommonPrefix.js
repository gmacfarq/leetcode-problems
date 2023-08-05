/**
 * @param {string[]} strs
 * @return {string}
 */

//store a variable to keep track of the prefix
//maintain a currIdx to keep track of current letter
//loop through and check the ith letter of each element
//

var longestCommonPrefix = function (strs) {
  let longestCommon = "";
  let currIdx = 0;

  if(strs.length === 1){
      return strs[0]
  }

  while (true) {
      for (i = 0; i < strs.length - 1; i++) {
          if(currIdx === strs[i].length) return longestCommon;
          if(!strs[i]) return "";

          if (strs[i][currIdx] !== strs[i + 1][currIdx]) {
              return longestCommon;
          }
      }
      longestCommon += strs[0][currIdx];
      currIdx++;
  }

};