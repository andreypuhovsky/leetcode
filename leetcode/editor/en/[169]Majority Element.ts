
//leetcode submit region begin(Prohibit modification and deletion)
function majorityElement(nums: number[]): number {
    let votes = 0
    let candidate = 0

    for (let num of nums) {
        if (votes === 0) {
            candidate = num
        }

        votes += (num === candidate) ? 1 : -1
    }

    return candidate
};
//leetcode submit region end(Prohibit modification and deletion)
