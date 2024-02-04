
//leetcode submit region begin(Prohibit modification and deletion)
function medianOfArray(nums: number[], length: number): number{
    const middleIdx = ~~(length / 2)

    if (length % 2 === 1) {
        return nums[middleIdx]
    }

    return (nums[middleIdx - 1] + nums[middleIdx]) / 2
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums1Length = nums1.length
    const nums2Length = nums2.length

    if (nums1Length === 0) {
        return medianOfArray(nums2, nums2Length)
    }

    if (nums2Length === 0) {
        return medianOfArray(nums1, nums1Length)
    }

    const nums = [...nums1, ...nums2]
        .sort((a, b) => a - b)

    return medianOfArray(nums, nums.length)
};
//leetcode submit region end(Prohibit modification and deletion)
