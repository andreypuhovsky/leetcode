
# leetcode submit region begin(Prohibit modification and deletion)
ROMAN_TO_INT_MAP = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        parsed = []
        for i in range(len(s)):
            parsed.append(ROMAN_TO_INT_MAP[s[i]])

        for i in range(len(parsed) - 1):
            if parsed[i] < parsed[i + 1]:
                parsed[i] = -parsed[i]

        return sum(parsed)
# leetcode submit region end(Prohibit modification and deletion)
