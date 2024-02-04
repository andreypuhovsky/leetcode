
//leetcode submit region begin(Prohibit modification and deletion)
function maxProfit(prices: number[]): number {
    let currentNumber = prices[0];
    let maxProfit = 0;

    for (const price of prices) {
        if (price < currentNumber) {
            currentNumber = price;
        } else {
            maxProfit = Math.max(maxProfit, price - currentNumber);
        }
    }

    return maxProfit;
};
//leetcode submit region end(Prohibit modification and deletion)
