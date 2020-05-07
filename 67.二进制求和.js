/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (52.54%)
 * Likes:    358
 * Dislikes: 0
 * Total Accepted:    79.5K
 * Total Submissions: 151.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 每个字符串仅由字符 '0' 或 '1' 组成。
 * 1 <= a.length, b.length <= 10^4
 * 字符串如果不是 "0" ，就都不含前导零。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let len = a.length > b.length ? a.length : b.length
    let aa = a.split('').reverse()
    let bb = b.split('').reverse()
    let progress = 0
    let progress1 = 0
    for (let i = 0; i < len; i++) {
        if (!aa[i]) aa[i] = 0
        if (!bb[i]) bb[i] = 0
        aa[i] -= 0
        bb[i] -= 0
        aa[i] += progress
        aa[i] += progress1
        if (aa[i] > 1) {
            aa[i] = 0
            progress = 1
        } else {
            progress = 0
        }
        if ((aa[i] - 0) + (bb[i] - 0) > 1) {
            aa[i] = 0
            progress1 = 1
        } else {
            aa[i] = aa[i] + bb[i]
            progress1 = 0
        }
    }
    if (progress || progress1) {
        aa.push(1)
    }
    console.log(aa)
    return aa.reverse().join('')
};
addBinary('1111', '1111')
// @lc code=end

