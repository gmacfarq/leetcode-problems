class Solution:
    def isPalindrome(self, s: str) -> bool:
        if len(s) <= 1:
            return True

        stripped = ""
        for letter in s:
            if letter.isalnum():
                stripped = stripped +  letter.lower()

        left = 0
        right = len(stripped)-1
        while left < right:
            if stripped[left] != stripped[right]:
                return False
            left+=1
            right-=1
        return True