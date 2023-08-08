//solved with two-pointers but there is a faster approach
// using String.reverse() and String.replace() methods
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length <= 1) return true;

  let cleanStr = "";
  for(i=0; i<s.length; i++){
      if(s[i].match(/^[A-Za-z0-9]+$/))
          cleanStr+=s[i].toLowerCase();
  }

  let left = 0;
  let right = cleanStr.length-1;

  while(cleanStr[left] == cleanStr[right]){
      left++;
      right--;
      if(right<=left) return true;
  }
  return false;
};