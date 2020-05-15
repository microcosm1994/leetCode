/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (52.80%)
 * Likes:    90
 * Dislikes: 0
 * Total Accepted:    21.9K
 * Total Submissions: 41.2K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines
 * 里面的字符构成。如果可以构成，返回 true ；否则返回 false。
 * 
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
 * 
 * 
 * 
 * 注意：
 * 
 * 你可以假设两个字符串均只含有小写字母。
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let m = 0
    let k = 0
    while (m < ransomNote.length) {
        if (ransomNote[m] === magazine[k]) {
            let arr = magazine.split('')
            arr.splice(k, 1)
            magazine = arr.join('')
            let arr1 = ransomNote.split('')
            arr1.splice(m, 1)
            ransomNote = arr1.join('')
            k = 0
        } else {
            k++
            if (k >= magazine.length) {
                m++
                k = 0
            }
        }
    }
    return ransomNote.length === 0
};
canConstruct('aa', 'ab')
// @lc code=end

