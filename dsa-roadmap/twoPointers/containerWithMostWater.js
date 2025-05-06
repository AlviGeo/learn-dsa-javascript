const containerWithMostWater = (heights) => {
  let result = 0;
  let left = 0;
  let right = heights.length - 1;

  while (left < right) {
    let area = (right - left) * Math.min(heights[left], heights[right]);
    result = Math.max(result, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

console.log(containerWithMostWater([1, 7, 2, 5, 4, 7, 3, 6]));
console.log(containerWithMostWater([2, 2, 2]));
