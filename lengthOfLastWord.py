class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.strip()

        if not s:
            return 0

        for i in range(len(s)-1, 0, -1):
            if s[i] == ' ':
                return s[i+1:].__len__()
        return len(s)

class FasterSolution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        word = s.strip().split(' ')
        return len(word[-1])