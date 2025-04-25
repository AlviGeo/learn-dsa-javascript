class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
  }
}

// console.log(isPalindrome("Was it a car or a cat I saw?"));
// console.log(isPalindrome("Madam, in Eden, I'm Adam"));
