/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  if (n === 1) return 1;

  const leftCandies = new Array(n).fill(1);
  const rightCandies = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
      if (ratings[i] > ratings[i - 1]) {
          leftCandies[i] = leftCandies[i - 1] + 1;
      }
  }

  for (let i = n - 2; i >= 0; i--) {
      if (ratings[i] > ratings[i + 1]) {
          rightCandies[i] = rightCandies[i + 1] + 1;
      }
  }

  let totalCandies = 0;
  for (let i = 0; i < n; i++) {
      totalCandies += Math.max(leftCandies[i], rightCandies[i]);
  }

  return totalCandies;
};

// /**
//  * @param {number[]} ratings
//  * @return {number}
//  */
// var candy = function (ratings) {
//   if (ratings.length === 1) return 1

//   let candies = [] // array tracking local minimums and maximums, 1 max, -1 min

//   for (let i = 0; i < ratings.length; i++) {
//       if (i === 0) {
//           if (ratings[i] <= ratings[i + 1]) candies.push(-1);
//           else candies.push(1);
//       }
//       else if (i === ratings.length - 1) {
//           if (ratings[i - 1] < ratings[i]) candies.push(1);
//           else candies.push(-1);
//       }
//       else if (ratings[i] <= ratings[i + 1] && ratings[i] <= ratings[i - 1]) {
//           candies.push(-1)
//       }
//       else if (ratings[i] >= ratings[i + 1] && ratings[i] >= ratings[i - 1]) {
//           candies.push(1)
//       }
//       else if(candies[i-1] == '^' || candies[i-1] == -1){
//          candies.push('^')
//       }
//       else if(candies[i-1] == 'v' || candies[i-1] == 1){
//          candies.push('v')
//       }


//   }

//   for (i = 0; i < candies.length; i++) {
//       if (candies[i] == 1) {
//           let maxDistance = 1;
//           for (let j = 1; j < candies.length - i; j++) {
//               if (candies[i + j] == -1 ) {
//                   maxDistance = j;
//                   break;
//               }
//           }
//           for (let k = 1; k < i+1; k++) {
//               if (candies[i - k] == -1 ) {
//                   if(k > maxDistance) maxDistance = k;
//                   break;
//               }
//           }
//           candies[i] = maxDistance+1;
//       }
//   }

//   for(i = 0; i<candies.length; i++){
//       if(candies[i] == -1){
//           candies[i] = 1;
//       }
//       if(candies[i] === '^'){
//           candies[i] = candies[i-1]+1
//       }
//       if(candies[i] === 'v'){
//           candies[i] = candies[i-1]-1
//       }
//   }
//   console.log(candies)
//   return candies.reduce((acc,num) => acc + num);
// }