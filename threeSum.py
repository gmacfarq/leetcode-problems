class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sortNums = sorted(nums)
        ans = []

        for i in range(len(sortNums) - 2):
            if i == 0 or (i > 0 and sortNums[i] != sortNums[i - 1]):
                left = i + 1
                right = len(sortNums) - 1
                while left < right:
                    currSum = sortNums[left] + sortNums[right] + sortNums[i]
                    if currSum == 0:
                        ans.append([sortNums[i], sortNums[left], sortNums[right]])
                        while left < right and sortNums[left] == sortNums[left + 1]:
                            left += 1
                        while left < right and sortNums[right] == sortNums[right - 1]:
                            right -= 1
                        left += 1
                        right -= 1
                    elif currSum < 0:
                        left += 1
                    else:
                        right -= 1

        return ans
