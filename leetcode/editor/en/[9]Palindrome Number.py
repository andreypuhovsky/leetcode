
# leetcode submit region begin(Prohibit modification and deletion)
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0:
            return False
        if x < 10:
            return True

        return str(x) == str(x)[::-1]
# leetcode submit region end(Prohibit modification and deletion)
