/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let jumps = 0;
  let curr = 0;
  while (curr < nums.length - 1) {
      if (curr + nums[curr] >= nums.length - 1) {
          return ++jumps;
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
          jumps++;
      }
  }
  return jumps;
};