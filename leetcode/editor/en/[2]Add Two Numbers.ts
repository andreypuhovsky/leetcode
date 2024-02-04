
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

    let overflow = false

    const resultL = new ListNode()
    let currentL = resultL

    // Loop through the lists until both are null and there is no overflow
    while (currentL1 || currentL2 || overflow) {
        let prenumber =
            (currentL1?.val || 0) +
            (currentL2?.val || 0) +
            (overflow ? 1 : 0)

        overflow = false

        // If the number is 10 or more, we need to set the overflow to the next number
        let number = prenumber % 10
        if (number !== prenumber) {
            overflow = true
        }

        // Add the number to result and move to the next
        currentL.next = new ListNode(number)
        currentL = currentL.next

        // Move to the next nodes on both lists
        currentL1 = currentL1?.next
        currentL2 = currentL2?.next
    }

    return resultL.next
};
//leetcode submit region end(Prohibit modification and deletion)
