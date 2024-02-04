
//leetcode submit region begin(Prohibit modification and deletion)
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const length = nums.length

    k %= length

    nums.splice(
        0,
        0,
        ...nums.splice(length - k, k)
    )
};
//leetcode submit region end(Prohibit modification and deletion)
