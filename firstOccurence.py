class Solution(object):
    def strStr(self, haystack, needle):
        """
        :type haystack: str
        :type needle: str
        :rtype: int
        """
        if(haystack == needle):
            return 0

        for i in range(len(haystack)):
            if(haystack[i:i+len(needle)] == needle):
                return i
        return -1