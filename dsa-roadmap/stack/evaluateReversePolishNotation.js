class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  //   evalRPN(tokens) {
  //     const stack = [];

  //     for (const token of tokens) {
  //       if (token === "+") {
  //         stack.push(stack.pop() + stack.pop());
  //       } else if (token === "-") {
  //         const right = stack.pop();
  //         const left = stack.pop();
  //         stack.push(right - left);
  //       } else if (token === "*") {
  //         stack.push(stack.pop() * stack.pop());
  //       } else if (token === "/") {
  //         const right = stack.pop();
  //         const left = stack.pop();
  //         stack.push(Math.trunc(right / left));
  //       } else {
  //         stack.push(Number(token));
  //       }
  //     }

  //     return stack.join();
  //   }

  //   Refactored code
  evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
      if (!isNaN(token)) {
        stack.push(Number(token));
      } else {
        const right = stack.pop();
        const left = stack.pop();
        let result;

        switch (token) {
          case "+":
            result = left + right;
            break;
          case "-":
            result = left - right;
            break;
          case "*":
            result = left * right;
            break;
          case "/":
            result = Math.trunc(left / right);
            break;
        }

        stack.push(result);
      }
    }

    return stack[0];
  }
}

const calculate = new Solution();
// calculate.evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
// calculate.evalRPN(["4", "13", "5", "/", "+"]);
// calculate.evalRPN(["3", "11", "5", "+", "-"]);
calculate.evalRPN(["2", "1", "+", "3", "*"]);
console.log(calculate);
