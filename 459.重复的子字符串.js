/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 *
 * https://leetcode-cn.com/problems/repeated-substring-pattern/description/
 *
 * algorithms
 * Easy (46.45%)
 * Likes:    214
 * Dislikes: 0
 * Total Accepted:    18.9K
 * Total Submissions: 40.4K
 * Testcase Example:  '"abab"'
 *
 * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
 * 
 * 示例 1:
 * 
 * 
 * 输入: "abab"
 * 
 * 输出: True
 * 
 * 解释: 可由子字符串 "ab" 重复两次构成。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: "aba"
 * 
 * 输出: False
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: "abcabcabcabc"
 * 
 * 输出: True
 * 
 * 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let l = 1
    while (l < s.length) {
        let str = s.substr(0, l)
        let flag = true
        for (let i = 0; i < s.length; i += l) {
            let str1 = s.substr(i, l)
            if (str !== str1) {
                flag = false
                break
            }
        }
        if (flag) {
            return true
        } else {
            l++
        }
    }
    return false
};
repeatedSubstringPattern('abcabcabcabc')
// @lc code=end

