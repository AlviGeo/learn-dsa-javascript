class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    const flatArr = matrix.flatMap((num) => num);

    for (let i = 0; i < flatArr.length; i++) {
      if (flatArr[i] === target) {
        return true;
      }
    }

    return false;
  }
}

const matrix = new Solution();
console.log(matrix.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10)) // true
console.log(matrix.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15)) // false
