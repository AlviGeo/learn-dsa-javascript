const twoSum = (arrayNum, targetNum) => {
  let result = [];

  for (let i = 0; i < arrayNum.length; i++) {
    for (let j = i + 1; j < arrayNum.length; j++) {
      if (arrayNum[i] + arrayNum[j] === targetNum) {
        result.push(i, j);
        // return [i, j] also works
      }
    }
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9)); // should be return [O, 1]
console.log(twoSum([1, 3, 7, 9, 2], 11)); // should be return [3,4]
