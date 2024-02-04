
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) {
        return list2
    }

    if (!list2) {
        return list1
    }

    let p1 = list1
    let p2 = list2
    const result = new ListNode()
    let current = result

    while (p1 || p2) {
        if (p1 && (!p2 || p1.val < p2.val)) {
            current.next = p1
            p1 = p1.next
            current = current.next
        }

        if (p2 && (!p1 || p1.val >= p2.val)) {
            current.next = p2
            p2 = p2.next
            current = current.next
        }
    }

    return result.next
};
//leetcode submit region end(Prohibit modification and deletion)
