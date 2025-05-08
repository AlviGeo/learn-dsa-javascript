class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let left = 0; // buy day
    let right = 1; // sell day
    let maxProfit = 0;

    while (right < prices.length) {
      if (prices[right] > prices[left]) {
        maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
      } else {
        left = right;
      }
      right++;
    }

    return maxProfit;
  }
}

// console.log(maxProfit([10, 1, 5, 6, 7, 1])); // 6
// console.log(maxProfit([10,8,7,5,2])); // 0
