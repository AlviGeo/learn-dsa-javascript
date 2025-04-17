const twoSum = (nums, target) => {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(complement);
    if (complement in numMap && numMap[complement] !== i) {
      console.log(numMap[complement]);
      return [numMap[complement], i];
    }
    // so first iteration will be numMap { 2:0 }
    numMap[nums[i]] = i;
    console.log(numMap);
  }

  return [];
};

// console.log(twoSum([2, 15, 11, 7], 9));
console.log(twoSum([2, 2, 7, 11, 15], 9));
// console.log(twoSum([3, 3], 6));
