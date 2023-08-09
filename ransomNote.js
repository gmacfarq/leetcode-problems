 /**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  let ransomFreq = {}
  let magazineFreq = {}

  for (const char of ransomNote) {
      ransomFreq[char] = (ransomFreq[char] || 0) + 1;
  }

  for (const char of magazine) {
      magazineFreq[char] = (magazineFreq[char] || 0) + 1;
  }

  for (const char in ransomFreq) {
      if (!magazineFreq[char] || magazineFreq[char] < ransomFreq[char]) {
          return false;
      }
  }

  return true;
};