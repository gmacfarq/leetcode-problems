class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height)-1
        areas = []

        while left < right:
            if height[right] > height[left]:
                areas.append((right-left)*height[left])
                left+=1
            else:
                areas.append((right-left)*height[right])
                right-=1
        return max(areas)