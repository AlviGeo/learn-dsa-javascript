const isValidParenthesis = (str) => {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (char of str) {
    // If it's an opening bracket, push it to the stack
    if (brackets[char]) {
      console.log(char);
      stack.push(char);
    } else {
      // If it's a closing bracket, check if it matches the top of the stack
      const top = stack.pop();

      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]")); // false
console.log(isValidParenthesis("()")); // true
console.log(isValidParenthesis("(")); // false
