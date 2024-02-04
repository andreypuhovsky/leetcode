
//leetcode submit region begin(Prohibit modification and deletion)
function twoSum(nums: number[], target: number): number[] {
    for (const num1Idx in nums) {
        const num1 = nums[num1Idx];

        for (const relIdx in nums.slice(+num1Idx)) {
            const num2Idx = +num1Idx + +relIdx + 1;
            const num2 = nums[num2Idx];

            if (num1 + num2 === target) {
                return [+num1Idx, +num2Idx];
            }
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
