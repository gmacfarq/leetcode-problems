##backtracking with stack to generate all valid parens
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:

        res = []
        stack = []

        def backtrack(openNum, closedNum):
            if openNum == closedNum == n:
                res.append("".join(stack))
                return

            if openNum < n:
                stack.append("(")
                backtrack(openNum+1, closedNum)
                stack.pop()

            if closedNum < openNum:
                stack.append(")")
                backtrack(openNum, closedNum+1)
                stack.pop()

        backtrack(0,0)
        return res
