class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const totalNums = nums.length;
    const result = Array(totalNums).fill(1);

    let left = 1;
    for (let i = 0; i < totalNums; i++) {
      result[i] = left;
      left *= nums[i];
    }

    let right = 1;
    for (let i = totalNums - 1; i >= 0; i--) {
      result[i] *= right;
      right *= nums[i];
    }

    return result;
  }
}

// [1, 2, 4, 6]
