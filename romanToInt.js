/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let roms = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  let arr = [...s];

  let sum = 0
  for (i = 0; i < arr.length; i++) {
      let currNum = arr[i];
      let nextNum = arr[i + 1];

      if (currNum === 'I') {
          if (nextNum === 'V' || nextNum === 'X') {
              sum += (roms[nextNum] - roms[currNum])
              i++;
          }
          else sum += roms[currNum]
      }

      else if (currNum === 'X') {
          if (nextNum === 'L' || nextNum === 'C') {
              sum += (roms[nextNum] - roms[currNum])
              i++;
          }
          else sum += roms[currNum]
      }

      else if (currNum === 'C') {
          if (nextNum === 'D' || nextNum === 'M') {
              sum += (roms[nextNum] - roms[currNum])
              i++;
          }
          else sum += roms[currNum]
      }
      else sum += roms[currNum]
  }

  return sum;
};