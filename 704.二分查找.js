/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 *
 * https://leetcode-cn.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (55.67%)
 * Likes:    186
 * Dislikes: 0
 * Total Accepted:    86.3K
 * Total Submissions: 154.8K
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
 * 
 * 
 * 示例 1:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let flag = true
    let result = 0
    while (flag) {
        let index = Math.floor(nums.length / 2)
        result += index
        if (target === nums[index]) {
            flag = false
        } else if (index === 0) {
            result = -1
            flag = false
        } else if (target > nums[index]) {
            nums.splice(0, index)
        } else {
            nums.splice(index, nums.length - 1)
            result -= index
        }
    }
    return result
};
// [2,5]
// [-1,0,3,5,9,12]
// @lc code=end

