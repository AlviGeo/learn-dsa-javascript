class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */

  minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let res = right;
    // console.log(res)

    while (left <= right) {
      let hours = 0;
      let k = Math.floor((left + right) / 2);

      for (const pile of piles) {
        hours += Math.ceil(pile / k);
      }

      if (hours <= h) {
        console.log(hours);
        res = Math.min(res, k);
        right = k - 1;
      } else {
        left = k + 1;
      }
    }

    return Math.floor(res);
  }
}
const eating = new Solution();
// console.log(eating.minEatingSpeed([1, 4, 3, 2], 9)); // 2
// console.log(eating.minEatingSpeed([25, 10, 23, 4], 4)); // 25
