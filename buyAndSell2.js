/**
 * @param {number[]} prices
 * @return {number}
 */

 //buy on the first day, look at the next day, decide to hold or sell, then look at the next day, decide to hold or sell, ...
 var maxProfit = function(prices) {
  if (prices.length <= 1) {
      return 0;
  }

  let profit = 0;
  let currSale = 0;
  for(i = 0; i < prices.length; i++){
      let value = prices[i];
      let nextValue = prices[i+1];

      if(value < nextValue){
          currSale += nextValue-value;
      }
      if(nextValue >= value){
          profit += currSale;
          currSale = 0;
      }
  }

  return profit;
};