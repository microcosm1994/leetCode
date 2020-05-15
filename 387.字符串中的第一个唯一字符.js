/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (44.65%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    76.3K
 * Total Submissions: 169.8K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let m = 0
    let k = 0
    let flag = true
    while (m < s.length) {
        if (s[m] === s[k] && m !== k) {
            flag = false
            k = s.length
        }
        k++
        if (k >= s.length) {
            if (flag) return m
            m++
            k = 0
            flag = true
        }
    }
    return -1
};
firstUniqChar('loveleetcode')
// @lc code=end

