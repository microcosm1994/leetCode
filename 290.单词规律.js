/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 *
 * https://leetcode-cn.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (42.46%)
 * Likes:    148
 * Dislikes: 0
 * Total Accepted:    23.2K
 * Total Submissions: 54.5K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
 * 
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
 * 
 * 示例1:
 * 
 * 输入: pattern = "abba", str = "dog cat cat dog"
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:pattern = "abba", str = "dog cat cat fish"
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: pattern = "aaaa", str = "dog cat cat dog"
 * 输出: false
 * 
 * 示例 4:
 * 
 * 输入: pattern = "abba", str = "dog dog dog dog"
 * 输出: false
 * 
 * 说明:
 * 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    
 * 
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let arr = str.split(' ')
    let pattern1 = pattern.split('')
    if (pattern1.length !== arr.length) return false
    for (let i = 0; i < pattern1.length; i++) {
        for (let k = i + 1; k < pattern1.length; k++) {
            if (pattern1[i] === pattern1[k] && arr[i] !== arr[k]) {
                return false
            }
            if (pattern1[i] !== pattern1[k] && arr[i] === arr[k]) {
                return false
            }
        }
    }
    return true
};
wordPattern('abba', 'dog cat cat dog')
// @lc code=end

