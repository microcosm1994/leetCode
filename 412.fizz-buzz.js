/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode-cn.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (63.37%)
 * Likes:    60
 * Dislikes: 0
 * Total Accepted:    34.1K
 * Total Submissions: 53.7K
 * Testcase Example:  '1'
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 * 
 * 示例：
 * 
 * n = 15,
 * 
 * 返回:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = []
    let num = 1
    while (num <= n) {
        if (num % 3 === 0 && num % 5 !== 0) {
            result.push('Fizz')
        } else if (num % 5 === 0 && num % 3 !== 0) {
            result.push('Buzz')
        } else if (num % 3 === 0 && num % 5 === 0) {
            result.push('FizzBuzz')
        } else {
            result.push(num + '')
        }
        num++
    }
    return result
};
fizzBuzz(1)
// @lc code=end

