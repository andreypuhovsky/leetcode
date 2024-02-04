
//leetcode submit region begin(Prohibit modification and deletion)
function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false
    }

    if (x < 10) {
        return true
    }

    let reversed = 0
    let normal = x

    while (normal > 0) {
        reversed = (reversed * 10) + (normal % 10)
        normal = Math.floor(normal / 10)
    }

    return x === reversed
};
//leetcode submit region end(Prohibit modification and deletion)
