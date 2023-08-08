/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
      let curr = numbers[left] + numbers[right]
      if (curr < target)
          left++;
      if (curr > target)
          right--;
  }

  return [left + 1, right + 1]
};