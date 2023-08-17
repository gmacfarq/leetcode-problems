# hash anagrams by sorting the string and using it as a key
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_groups = {}

        for s in strs:
            sorted_s = ''.join(sorted(s))
            if sorted_s in anagram_groups:
                anagram_groups[sorted_s].append(s)
            else:
                anagram_groups[sorted_s] = [s]

        return list(anagram_groups.values())