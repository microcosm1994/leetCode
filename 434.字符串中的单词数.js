/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 *
 * https://leetcode-cn.com/problems/number-of-segments-in-a-string/description/
 *
 * algorithms
 * Easy (34.66%)
 * Likes:    51
 * Dislikes: 0
 * Total Accepted:    16.2K
 * Total Submissions: 46.4K
 * Testcase Example:  '"Hello, my name is John"'
 *
 * 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
 * 
 * 请注意，你可以假定字符串里不包括任何不可打印的字符。
 * 
 * 示例:
 * 
 * 输入: "Hello, my name is John"
 * 输出: 5
 * 解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    s = s.trim()
    if (!s) return 0
    let arr = s.split(' ').filter((item) => {
        return item !== ''
    })
    return arr.length
};
countSegments(", , , ,        a, eaefa")
// @lc code=end

