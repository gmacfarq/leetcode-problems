/**
 * @param {number[]} nums
 * @return {boolean}
 */

//if current jump is greater than or equal to the length minus the current index, return true
//otherwise, jump the greatest amunt that doesnt result in a 0
//if we are on a 0 return false

var canJump = function(nums) {
  let curr = 0;
  while (curr < nums.length - 1) {
      if (nums[curr] === 0) {
          return false; // Cannot jump forward from this position.
      } else if (curr + nums[curr] >= nums.length - 1) {
          return true;
      } else {
          let maxJump = 0;
          let nextIndex = 0;
          for (let j = 1; j <= nums[curr]; j++) {
              if (curr + j + nums[curr + j] > maxJump) {
                  maxJump = curr + j + nums[curr + j];
                  nextIndex = curr + j;
              }
          }
          curr = nextIndex;
      }
  }
  return true;
};