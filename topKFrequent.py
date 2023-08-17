class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqs = {}
        for i in nums:
            freqs[i] = freqs.get(i, 0) + 1
        sorted_freqs = sorted(freqs.items(), key=lambda x: x[1], reverse=True)
        print(sorted_freqs)

        result = [];
        for i in range(k):
            result.append(sorted_freqs[i][0])

        return result
        