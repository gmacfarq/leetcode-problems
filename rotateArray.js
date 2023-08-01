/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  const rotations = k % nums.length;
  let temp = [];
  for (let i = 0; i < rotations; i++) {
      temp[rotations - 1 - i] = nums.pop();
  }
  nums.unshift(...temp);
};