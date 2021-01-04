/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 *
 * https://leetcode-cn.com/problems/longest-harmonious-subsequence/description/
 *
 * algorithms
 * Easy (49.33%)
 * Likes:    145
 * Dislikes: 0
 * Total Accepted:    19K
 * Total Submissions: 38.4K
 * Testcase Example:  '[1,3,2,2,5,2,3,7]'
 *
 * 和谐数组是指一个数组里元素的最大值和最小值之间的差别正好是1。
 * 
 * 现在，给定一个整数数组，你需要在所有可能的子序列中找到最长的和谐子序列的长度。
 * 
 * 示例 1:
 * 
 * 
 * 输入: [1,3,2,2,5,2,3,7]
 * 输出: 5
 * 原因: 最长的和谐数组是：[3,2,2,2,3].
 * 
 * 
 * 说明: 输入的数组长度最大不超过20,000.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let arr = nums.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for(let k = arr.length - 1; k > 0; k--) {
            if (arr[i] - arr[k] === 1 || arr[k] - arr[i] === 1) {
                result.push(k - i + 1)
                k = 0
            }
        }
    }
    return result.length === 0 ? 0 : result.sort((a, b) => a - b)[result.length - 1]
};
// [1,2,3,3,1,-14,13,4]
// [3,2,2,3,2,1,3,3,3,-2,0,3,2,1,0,3,1,0,1,3,0,3,3]
// @lc code=end

