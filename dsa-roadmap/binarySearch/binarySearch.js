class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }
}

const binary = new Solution();
console.log(binary.search([-1, 0, 2, 4, 6, 8], 4)); // 3
console.log(binary.search([-1, 0, 2, 4, 6, 8], 3)); // -1
