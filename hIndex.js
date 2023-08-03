var hIndex = function(citations) {
  citations.sort((a, b) => b - a);

  let currH = 0;
  for (let i = 0; i < citations.length; i++) {
      if (citations[i] >= i + 1) {
          currH = i + 1;
      } else {
          break;
      }
  }

  return currH;
};