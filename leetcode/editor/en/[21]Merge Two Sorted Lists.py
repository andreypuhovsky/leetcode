
# leetcode submit region begin(Prohibit modification and deletion)
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        if not list1:
            return list2

        if not list2:
            return list1

        p1 = list1
        p2 = list2

        result = ListNode()
        current = result

        while p1 or p2:
            if p1 and (not p2 or p1.val < p2.val):
                current.next = p1
                p1 = p1.next
                current = current.next

            if p2 and (not p1 or p1.val >= p2.val):
                current.next = p2
                p2 = p2.next
                current = current.next

        return result.next

# leetcode submit region end(Prohibit modification and deletion)
