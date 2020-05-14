/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 *
 * https://leetcode-cn.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (48.53%)
 * Likes:    107
 * Dislikes: 0
 * Total Accepted:    24.1K
 * Total Submissions: 49.6K
 * Testcase Example:  '16'
 *
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 16
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num === 0) return false
    let a = (Math.log(num) / Math.log(4)).toFixed(2) - 0
    if (Number.isInteger(a)) {
        return num === Math.pow(4, a)
    } else {
        return false
    }
};
isPowerOfFour(2)
// @lc code=end

