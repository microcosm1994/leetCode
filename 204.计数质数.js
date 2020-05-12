/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (33.39%)
 * Likes:    340
 * Dislikes: 0
 * Total Accepted:    55.7K
 * Total Submissions: 166.3K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let result = n > 2 ? 1 : 0
    while (n > 2) {
        n--
        let flag = true
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                flag = false
                i = n
            }
        }
        if (flag && n !== 2) result++
    }
    return result
};
countPrimes(10)
// @lc code=end

