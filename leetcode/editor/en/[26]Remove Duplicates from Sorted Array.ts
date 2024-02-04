
//leetcode submit region begin(Prohibit modification and deletion)
function removeDuplicates(nums: number[]): number {
    let currentIdx = 0
    let currentNumber = null

    for (const numIdx in nums) {
        const num = nums[numIdx]

        if (currentNumber === num) {
            continue
        }

        nums[currentIdx] = num

        currentNumber = num
        currentIdx++
    }

    return currentIdx
};
//leetcode submit region end(Prohibit modification and deletion)
