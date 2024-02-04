
//leetcode submit region begin(Prohibit modification and deletion)
function twoSum(nums: number[], target: number): number[] {
    // We iterate through the array using the index and for each number
    for (const num1IdxString in nums) {
        // We convert the index to a number as we expect it to be a number
        const num1Idx = +num1IdxString;

        // We check if the difference between the target and
        // the number is in the array.
        const num2 = target - nums[num1Idx];

        // We start searching from the index after the current number
        // to avoid using the same index twice.
        const num2Idx = nums.indexOf(num2, num1Idx + 1);

        // If it is, we return the constituents' indices.
        if (num2Idx !== -1) {
            return [num1Idx, num2Idx];
        }
    }
};
//leetcode submit region end(Prohibit modification and deletion)
