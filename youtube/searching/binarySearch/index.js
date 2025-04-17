const searchPrimeNumber = (array, target) => {
  let min = 0;
  let max = array.length - 1;
  let count = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    count++;

    if (array[mid] === target) {
      return { message: "You found the number!", count };
    } else if (array[mid] < target) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return { message: "Number not found!", count };
};

console.log(
  searchPrimeNumber(
    [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ],
    61
  )
);
