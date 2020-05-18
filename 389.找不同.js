/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (61.44%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    26.5K
 * Total Submissions: 43.1K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 * 
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 * 
 * 请找出在 t 中被添加的字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入：
 * s = "abcd"
 * t = "abcde"
 * 
 * 输出：
 * e
 * 
 * 解释：
 * 'e' 是那个被添加的字母。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let m = 0
    let k = 0
    while (m < t.length) {
        if (!s.includes(t[m])) return t[m]
        if (s[k] === t[m]) {
            let sArr = s.split('')
            sArr.splice(k, 1)
            s = sArr.join('')
            let tArr = t.split('')
            tArr.splice(m, 1)
            t = tArr.join('')
            k = s.length
            m--
        }
        k++
        if (k >= s.length) {
            m++
            k = 0
        }
    }
    return t[0]
};
findTheDifference(s1, t1)
// @lc code=end

