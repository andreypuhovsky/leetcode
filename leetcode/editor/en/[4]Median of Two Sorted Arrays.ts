
//leetcode submit region begin(Prohibit modification and deletion)
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = [...nums1, ...nums2]
        .sort((a, b) => a - b)

    const middleIdx = ~~(nums.length / 2)

    if (nums.length % 2 === 1) {
        return nums[middleIdx]
    }

    return (nums[middleIdx - 1] + nums[middleIdx]) / 2
};
//leetcode submit region end(Prohibit modification and deletion)
