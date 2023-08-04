/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roms = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
  };

  let ans = [];

  while (num > 0) {
      for (key in roms) {
          console.log(key)
          if(num >= roms[key]){
              num-=roms[key];
              ans.push(key);
              break;
          }
      }
  }
  return ans.join("");
};