const fizzBuzz = (number) => {
  // Short method
  let result =
    number % 5 === 0 && number % 3 === 0
      ? "FizzBuzz"
      : number % 5 === 0
      ? "Buzz"
      : number % 3 === 0
      ? "Fizz"
      : "Not both";
  return result;
};

console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(4));
console.log(fizzBuzz(5));
console.log(fizzBuzz(6));
console.log(fizzBuzz(7));
console.log(fizzBuzz(8));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
