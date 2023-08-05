/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
      return s;
  }

  let resultArr = [];
  for(i = 0; i<numRows; i++){
      resultArr.push([])
  }

  let row = 0;
  let down = true;
  for(i = 0; i<s.length; i++){
      resultArr[row].push(s[i])

      if(row === numRows-1){
          down = false;
      }

      if(row === 0){
          down = true;
      }

      down ? row++ : row--;
  }
  let resultStr = "";
  for( i=0; i<resultArr.length; i++){
      for(j = 0; j<resultArr[i].length; j++){
          if(resultArr[i][j]) resultStr+=resultArr[i][j]
      }
  }
  return resultStr;

};