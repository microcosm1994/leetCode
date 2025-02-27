/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (43.32%)
 * Likes:    120
 * Dislikes: 0
 * Total Accepted:    31.5K
 * Total Submissions: 72.6K
 * Testcase Example:  '16'
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 
 * 说明：不要使用任何内置的库函数，如  sqrt。
 * 
 * 示例 1：
 * 
 * 输入：16
 * 输出：True
 * 
 * 示例 2：
 * 
 * 输入：14
 * 输出：False
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let result = 1
    let m = 2
    while (result !== num) {
        for (let i = 1; i < num; i++) {
            result *= m
            if (result === num) return true
            if (result > num) i = num
        }
        m++
        result = 1
        if (m * m > num) return false
    }
    return true
};
isPerfectSquare(9)
// @lc code=end

