
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let currentL1 = l1,
        currentL2 = l2

    let overflow = 0

    const resultL = new ListNode()
    let currentL = resultL

    while (currentL1 || currentL2 || overflow) {
        let prenumber =
            (currentL1?.val || 0) +
            (currentL2?.val || 0) +
            (overflow)

        overflow = 0

        let number = prenumber % 10
        if (number !== prenumber) {
            overflow = 1
        }

        currentL.next = new ListNode(number)
        currentL = currentL.next

        currentL1 = currentL1?.next
        currentL2 = currentL2?.next
    }

    return resultL.next
};
//leetcode submit region end(Prohibit modification and deletion)
