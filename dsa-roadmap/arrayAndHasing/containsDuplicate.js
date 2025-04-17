class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let duplicateNum = [];

    for (const num of nums) {
      if (duplicateNum.includes(num)) return true;
      duplicateNum.push(num);
    }
    return false;
  }
}
