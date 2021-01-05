/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 *
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/description/
 *
 * algorithms
 * Easy (49.99%)
 * Likes:    210
 * Dislikes: 0
 * Total Accepted:    35.9K
 * Total Submissions: 72K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,2,3]
 * 输出: 6
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: [1,2,3,4]
 * 输出: 24
 * 
 * 
 * 注意:
 * 
 * 
 * 给定的整型数组长度范围是[3,10^4]，数组中所有的元素范围是[-1000, 1000]。
 * 输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let result = []
    if (nums.length === 3) return nums.reduce((a, c) => a * c)
    if (nums.length > 6) {
        let a = [...nums.sort((a, b) => a - b)].splice(0, 3)
        let b = [...nums.sort((a, b) => b - a)].splice(0, 3)
        nums = [...a, ...b]
    }
    for (let i = 0; i < nums.length; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            for (let j = k + 1; j < nums.length; j++) {
                result.push(nums[i] * nums[k] * nums[j])
            }
        }
    }
    result.sort((a, b) => b - a)
    return result[0]
};
// [-100,-2,-3,1]
// [1,2,3,4,-1,-2,-3,-4]
// [-1,-2,1,2,3]
// @lc code=end

