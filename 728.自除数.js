/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 *
 * https://leetcode-cn.com/problems/self-dividing-numbers/description/
 *
 * algorithms
 * Easy (74.91%)
 * Likes:    118
 * Dislikes: 0
 * Total Accepted:    27.8K
 * Total Submissions: 37K
 * Testcase Example:  '1\n22'
 *
 * 自除数 是指可以被它包含的每一位数除尽的数。
 * 
 * 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 * 
 * 还有，自除数不允许包含 0 。
 * 
 * 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。
 * 
 * 示例 1：
 * 
 * 
 * 输入： 
 * 上边界left = 1, 下边界right = 22
 * 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 * 
 * 
 * 注意：
 * 
 * 
 * 每个输入参数的边界满足 1 <= left <= right <= 10000。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        let flag = true
        if (i >= 10) {
            if (i % 10 !== 0) {
                let str = i.toString()
                for (let s of str) {
                    if (i % s !== 0) {
                        flag = false
                    }
                }
            } else {
                flag = false
            }
        }
        if (flag) {
            result.push(i)
        }
    }
    return result
};
// @lc code=end

