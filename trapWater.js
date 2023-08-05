/**
 * @param {number[]} height
 * @return {number}
 */
//use two-pointers approach
var trap = function (height) {
  let totalRain = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0;
  let right = height.length - 1;

 while (left < right) {
      if (height[left] < height[right]) {
          if (height[left] >= leftMax) {
              leftMax = height[left];
          } else {
              totalRain += leftMax - height[left];
          }
          left++;
      } else {
          if (height[right] >= rightMax) {
              rightMax = height[right];
          } else {
              totalRain += rightMax - height[right];
          }
          right--;
      }
  }

  return totalRain;
};