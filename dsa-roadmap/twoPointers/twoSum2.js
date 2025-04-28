function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSum([2, 3, 4], 6)); // Outputs [1, 3]

// console.log(twoSum([1, 2, 3, 4], 3));
console.log(twoSum([2, 3, 4], 6));
