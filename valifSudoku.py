#check each horizonatl line, then vertical lines, then the sub-boxes
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for i in range(9):
            rowFreqs = {}
            colFreqs = {}
            for j in range(9):
                if rowFreqs.get(board[i][j], 0) or colFreqs.get(board[j][i], 0):
                    return False
                if board[i][j] != ".":
                    rowFreqs[board[i][j]] = 1
                if board[j][i] != ".":
                    colFreqs[board[j][i]] = 1

        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                freqs = {}
                for k in range(0,3,1):
                    for n in range(0,3,1):
                        curr = board[i+k][j+n]
                        if freqs.get(curr, 0):
                            return False
                        if curr != ".":
                            freqs[curr] = 1


        return True