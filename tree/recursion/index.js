const countDown = (number) => {
  if (number === 0) {
    console.log("And finally the stopping point");
    return;
  }
  console.log(number);
  countDown(number - 1);
};

countDown(5);

const factorial = (number) => {
  // let countNum = 1;

  return number === 0 ? 1 : number * factorial(number - 1);

  // countNum = countNum * number;
  // console.log(countNum);
  // refactorial(number - 1);
};

console.log(factorial(5));
