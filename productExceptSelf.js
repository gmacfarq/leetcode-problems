/**
 * @param {number[]} nums
 * @return {number[]}
 */

//Array.reduce makes it O(n^2) time complexity
var productExceptSelf = function(nums) {
  let ans = [];
  if (nums.length == 0) return ans;

  for(i = 0; i<nums.length; i++){
      ans[i] = getProduct(nums, i);
  }
  return ans;
};

var getProduct = function(nums, i){
  let changed = false;
  if(!nums[i]){
      nums[i] = 1;
      changed = true;
  }
  let result = nums.reduce((acc, num) => acc * num, 1/nums[i])
  if(changed){
      nums[i] = 0;
  }

  return result
}

/**
 * @param {number[]} nums
 * @return {number[]}
*/

//O(n) time complexity solution
function productExceptSelf(nums) {
  const answer = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
      answer[i] = prefix;
      prefix *= nums[i];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
      postfix *= nums[i + 1];
      answer[i] *= postfix;
  }
  return answer;
};