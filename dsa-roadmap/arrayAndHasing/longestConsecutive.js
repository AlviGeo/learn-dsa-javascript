// const longestConsecutive = (arr) => {
//   if (arr.length === 0) return 0;

//   let sortArr = arr.sort(function (a, b) {
//     return a - b;
//   });
//   let firstNum = sortArr[0];
//   let totalConsecutive = 1;

//   let tempRemoveDuplicate = new Map();
//   for (const num of sortArr) {
//     if (!tempRemoveDuplicate[num]) {
//       tempRemoveDuplicate.set(num, num);
//     }
//   }
//   const mapTempRemoveDuplicate = Array.from(tempRemoveDuplicate.values());
//   console.log(mapTempRemoveDuplicate);

//   for (let i = 1; i < mapTempRemoveDuplicate.length; i++) {
//     if (mapTempRemoveDuplicate[i - 1] + 1 === mapTempRemoveDuplicate[i]) {
//       totalConsecutive++;
//     } else if (mapTempRemoveDuplicate[i - 1] !== mapTempRemoveDuplicate[i]) {
//       // Reset count if not consecutive (optional if you want max streak instead)
//       // totalConsecutive = 1;
//     }
//   }

//   return totalConsecutive;
// };

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const uniqueArr = [...new Set(nums)];
    uniqueArr.sort((a, b) => a - b);

    let maxStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < uniqueArr.length; i++) {
      if (uniqueArr[i] === uniqueArr[i - 1] + 1) {
        currentStreak++;
      } else if (uniqueArr[i] !== uniqueArr[i - 1]) {
        maxStreak = Math.max(maxStreak, currentStreak);
        currentStreak = 1;
      }
    }

    maxStreak = Math.max(maxStreak, currentStreak);

    return maxStreak;
  }
}

// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // Should return 7
// console.log(longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
// console.log(longestConsecutive([0, 3, 2, 5, 4, 6, 1, 1]));
// console.log(longestConsecutive([0, -1, 1]));
