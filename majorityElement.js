/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let freqs = {};
  for (i = 0; i < nums.length; i++) {
      if (freqs[nums[i]]) {
          freqs[nums[i]] += 1;
      }
      else {
          freqs[nums[i]] = 1;
      }
  }
  let max = 0;
  let maj;
  for (key in freqs) {
      if (freqs[key] > max) {
          max = freqs[key];
          maj = key;
      }
  }
  return maj
};