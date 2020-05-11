/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode-cn.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (63.03%)
 * Likes:    584
 * Dislikes: 0
 * Total Accepted:    163.6K
 * Total Submissions: 258.9K
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [3,2,3]
 * 输出: 3
 * 
 * 示例 2:
 * 
 * 输入: [2,2,1,1,1,2,2]
 * 输出: 2
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let k = 0
    let m = 0
    let sum = 1
    while (m < nums.length) {
        if (k <= m) k = m + 1
        if (nums[m] === nums[k]) {
            sum++
        }
        k++
        if (k >= nums.length) {
            if (sum > nums.length / 2) return nums[m]
            k = 0
            sum = 1
            m++
        }
    }
};
majorityElement([2,2,3,3,3,3,2])
// @lc code=end

