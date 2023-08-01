/**
 * @param {number[]} prices
 * @return {number}
 */
//o(n^2) solution
var maxProfit = function(prices) {
  let maxProfit = 0;
  for(i = 0; i<prices.length; i++){
      for(j = i; j<prices.length; j++){
          let currProfit = prices[j]-prices[i];
          if(currProfit > maxProfit){
              maxProfit = prices[j]-prices[i]
          }
      }
  }
  return maxProfit;
};


//O(n) solution
var maxProfit = function(prices) {
  if (prices.length <= 1) {
      return 0;
  }

  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
          minPrice = prices[i];
      } else {
          const currentProfit = prices[i] - minPrice;
          if (currentProfit > maxProfit) {
              maxProfit = currentProfit;
          }
      }
  }

  return maxProfit;
};