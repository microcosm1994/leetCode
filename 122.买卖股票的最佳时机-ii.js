/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 *
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (59.27%)
 * Likes:    691
 * Dislikes: 0
 * Total Accepted:    153.8K
 * Total Submissions: 258.3K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4,5]
 * 输出: 4
 * 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4
 * 。
 * 注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
 * 因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
 * 
 * 
 * 示例 3:
 * 
 * 输入: [7,6,4,3,1]
 * 输出: 0
 * 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= prices.length <= 3 * 10 ^ 4
 * 0 <= prices[i] <= 10 ^ 4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let copyArr = prices
    let resultArr = []
    let k = 0
    let m = 0
    while (m < prices.length - 1) {
        if (k <= m) {
            k = m + 1
        }
        let mk = m
        let kk = 0
        let stemp = 1
        let temp = 0
        while (stemp < prices.length) {
            if (kk === 0) {
                temp = 0
                stemp = 1
            }
            if (kk <= mk) {
                kk = mk + stemp
            }
            if (copyArr[mk] > copyArr[kk]) {
                kk++
            } else {
                if (copyArr[kk] - copyArr[mk]) {
                    temp += copyArr[kk] - copyArr[mk]
                    resultArr.push(copyArr[kk] - copyArr[mk])
                }
                kk += stemp
                mk = kk
            }
            if (kk >= prices.length) {
                if (!resultArr.includes(temp)) {
                    resultArr.push(temp)
                }
                kk = 0
                stemp++
                mk++
            }
        }
        if (copyArr[m] > copyArr[k]) {
            k++
        } else {
            if (copyArr[k] - copyArr[m]) {
                let sum = copyArr[k] - copyArr[m]
                if (!resultArr.includes(sum)) {
                    resultArr.push(sum)
                }
            }
            k++
        }
        if (k >= prices.length) {
            k = 0
            m++
        }
    }
    console.log(resultArr)
    if (resultArr.length) {
        return Math.max(...resultArr)
    } else {
        return 0
    }
};
maxProfit([6,1,3,2,4,7])
// @lc code=end

