const numberReverse = (number) => {
  // The weakness is it can't reverse minus number
  const reverseNum = number.toString().split("").reverse().join("");
  return parseInt(reverseNum) * Math.sign(number);
};

console.log(numberReverse(123));
