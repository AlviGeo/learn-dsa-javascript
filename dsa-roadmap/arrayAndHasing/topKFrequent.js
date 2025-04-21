// First method
// const topKFrequent = (nums, k) => {
//   const map = {};
//   const bucket = [];
//   const result = [];

//   for (let num of nums) {
//     map[num] = (map[num] || 0) + 1;
//   }
//   // {1:1, 2:2, 3:3}

//   for (let [num, freq] of Object.entries(map)) {
//     if (!bucket[freq]) {
//       bucket[freq] = new Set();
//     }
//     bucket[freq].add(num);
//     console.log(bucket);
//   }
//   // Set {0: '1'}, Set {0: '2}, Set: {0: '3'}

//   // Iterate from high frequency to low
//   for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
//     if (bucket[i]) {
//       result.push(...bucket[i]);
//     }
//   }

//   return result.slice(0, k); // just in case there are more than k
// };

// Second method
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const freqMap = {};

    // Step 1: Count frequency of each number
    for (let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Step 2: Convert map to array of [num, frequency]
    const freqArray = Object.entries(freqMap);

    // Step 3: Sort by frequency in descending order
    freqArray.sort((a, b) => b[1] - a[1]);

    // Step 4: Take the top k elements
    return freqArray.slice(0, k).map((entry) => Number(entry[0]));
  }
}

// console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // Output: [3, 2]
