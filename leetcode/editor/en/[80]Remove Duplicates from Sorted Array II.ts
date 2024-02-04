
//leetcode submit region begin(Prohibit modification and deletion)
function removeDuplicates(nums: number[]): number {
    let idx = 0

    // Iterate through the array
    for (let num of nums) {
        // If the current number is greater than the number 2 indexes
        // before the current index or the current index is less than 2
        if (idx < 2 || num > nums[idx - 2]) {
            nums[idx++] = num
        }
    }

    return idx
};
//leetcode submit region end(Prohibit modification and deletion)
