const reverseString = (str) => {
  const stack = [];

  // after push stack should become "hello world" now
  for (char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (stack.length) {
    reversedStr += stack.pop();
  }

  return reversedStr;
};

console.log(reverseString("hello world"));
