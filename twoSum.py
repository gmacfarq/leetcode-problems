class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        firstIdx = 0
        lastIdx = len(numbers)-1
        curr = numbers[firstIdx] + numbers[lastIdx]
        while curr != target:
            if curr < target:
                firstIdx+=1
            elif curr > target:
                lastIdx-=1
            curr = numbers[firstIdx] + numbers[lastIdx]
        return [firstIdx + 1, lastIdx + 1]
        