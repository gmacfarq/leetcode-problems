class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return len(nums)

        dict = {}
        for num in nums:
            dict[num] = dict.get(num, 0) + 1

        max = 0
        count = 0

        sorted_dict = sorted(dict)
        prev = sorted_dict[0]

        for i in range(len(sorted_dict)):
            if sorted_dict[i] == prev+1:
                count = count+1
            else:
                count = 0
            if count > max:
                max = count
            prev = sorted_dict[i]

        return max+1