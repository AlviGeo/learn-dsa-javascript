const palindrome = (text) => {
  // First method
  //   const reversedText = text.split("").reverse().join("");
  //   if (text === reversedText) {
  //     return true;
  //   }
  //   return false;

  // Second method
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[text.length - i]) {
      console.log(text[i]);
      return true;
    }
  }
  return true;
};

console.log(palindrome("racecar"));
