/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 *
 * https://leetcode-cn.com/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (69.79%)
 * Likes:    119
 * Dislikes: 0
 * Total Accepted:    23K
 * Total Submissions: 32.9K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 输入: ["Hello", "Alaska", "Dad", "Peace"]
 * 输出: ["Alaska", "Dad"]
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 你可以重复使用键盘上同一字符。
 * 你可以假设输入的字符串将只包含字母。
 * 
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    let result = []
    words.forEach((word) => {
        let temp = word.toLocaleLowerCase()
        let m = 0
        let k = 0
        while(m < temp.length) {
            if (keys[k].includes(temp[m])) {
                m++
                if (m >= temp.length) {
                    result.push(word)
                }
            } else {
                m = 0
                k++
            }
            if (k >= keys.length) {
                m = temp.length
            }
        }
    })
    return result
};
// @lc code=end

