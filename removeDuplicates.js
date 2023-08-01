/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let freqs = {};
  for(i = nums.length; i >= 0; i--){
      if(freqs[nums[i]]){
          nums.splice(i,1)
      }
      else{
          freqs[nums[i]] = 1;
      }
  }
  return freqs.length
};