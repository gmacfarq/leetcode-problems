/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let k = nums.length;
  let v = 0;
  for(let i = nums.length; i >= 0; i--){
      if(nums[i] === val){
          nums.splice(i,1)
          v++;
      }
  }
  return k-v;
};