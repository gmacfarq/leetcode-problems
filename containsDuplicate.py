class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        freqs = {}
        for num in nums:
            if num in freqs:
                return True
            else:
                freqs[num] = 1
        return False