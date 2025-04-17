class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const sorted = strs.map((str) => str.split("").sort().join(""));

    const mapWord = {};
    for (let i = 0; i < sorted.length; i++) {
      if (!mapWord[sorted[i]]) {
        mapWord[sorted[i]] = [];
      }
      mapWord[sorted[i]].push(strs[i]);
    }
    return Object.values(mapWord);
  }
}
