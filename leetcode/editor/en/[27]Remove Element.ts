
//leetcode submit region begin(Prohibit modification and deletion)
function removeElement(nums: number[], val: number): number {
    // Sort the array beforee searching for the value
    nums.sort((a, b) => a - b)

    // Find the leftmost index of the value
    const leftIdx = nums.indexOf(val)

    // If the value is not found, then there is no need to remove anything
    if (leftIdx === -1) {
        return nums.length
    }

    // As the array is sorted, the rightmost instance of the value will be
    // the last value in the array
    nums.splice(leftIdx, nums.lastIndexOf(val) - leftIdx + 1)

    // Return the length of the remaining array
    return nums.length
};
//leetcode submit region end(Prohibit modification and deletion)
