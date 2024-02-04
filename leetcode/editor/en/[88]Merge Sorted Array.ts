
//leetcode submit region begin(Prohibit modification and deletion)
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, n, ...nums2)
    nums1.sort((a, b) => a - b)
};
//leetcode submit region end(Prohibit modification and deletion)
