/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (69.04%)
 * Likes:    180
 * Dislikes: 0
 * Total Accepted:    66.5K
 * Total Submissions: 96.2K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let result = []
    let m = 0
    let k = 0
    while (m < nums1.length) {
        if (!result.includes(nums1[m]) && nums1[m] === nums2[k]) {
            result.push(nums1[m])
        }
        k++
        if (k >= nums2.length) {
            m++
            k = 0
        }
    }
    return result
};
// @lc code=end

