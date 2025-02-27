/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (60.58%)
 * Likes:    577
 * Dislikes: 0
 * Total Accepted:    145K
 * Total Submissions: 238.7K
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
 * 示例:
 * 
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 * 
 * 说明:
 * 
 * 
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++
            nums.splice(i, 1)
            i--
        }
    }
    while (count > 0) {
        nums.push(0)
        count--
    }
    return nums
};
moveZeroes([0,1,0,3,12])
// @lc code=end

