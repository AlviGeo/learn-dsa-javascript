class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const res = new Array(temperatures.length).fill(0);
    const stack = []; // pair: [temp, index]

    for (let i = 0; i < temperatures.length; i++) {
      const t = temperatures[i];
      while (stack.length > 0 && t > stack[stack.length - 1][0]) {
        const [stackT, stackInd] = stack.pop();
        res[stackInd] = i - stackInd;
      }
      stack.push([t, i]);
    }
    return res;
  }
}

const stack = new Solution();
console.log(stack.dailyTemperatures([30, 38, 30, 36, 35, 40, 28])); // [1 , 4, 1, 2, 1, 0, 0]
console.log(stack.dailyTemperatures([30, 60, 50, 70])); // [1, 2, 1, 0]
