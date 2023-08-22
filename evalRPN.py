class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        operations = {
            '+': lambda x, y: x + y,
            '-': lambda x, y: x - y,
            '*': lambda x, y: x * y,
            '/': lambda x, y: int(x / y)
        }

        for token in tokens:
            if token in operations:
                y = stack.pop()
                x = stack.pop()
                result = operations[token](x, y)
                stack.append(result)
            else:
                stack.append(int(token))

        return stack[0]
