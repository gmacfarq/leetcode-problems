class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        tfreq = {}
        sfreq = {}

        for char in t:
            tfreq[char] = tfreq.get(char, 0) + 1

        for char in s:
            sfreq[char] = sfreq.get(char, 0) + 1

        return tfreq == sfreq