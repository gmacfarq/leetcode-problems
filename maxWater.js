//start with left and right pointers.
//calculate the water between them, if it greater than maxWater, then assign maxWater to that value
//if left is greater than right, decrease right
//if right is greater than or equal to left, increase left
//
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
      if (height[left] > height[right]) {
          let currWater = (right - left) * height[right]
          if (maxWater < currWater) maxWater = currWater;
          right--;
      }
      else {
          let currWater = (right - left) * height[left]
          if (maxWater < currWater) maxWater = currWater;
          left++;
      }
  }

  return maxWater;


};