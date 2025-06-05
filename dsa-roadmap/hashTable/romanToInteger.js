var romanToInt = function (s) {
  const singleRomanNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const doubleRomanNum = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const mapping = new Map(Object.entries(singleRomanNum));
  const mapping2 = new Map(Object.entries(doubleRomanNum));
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const secondNum = i + 1;
    const combineWord = s[i] + s[secondNum];

    if (mapping2.get(combineWord)) {
      count += doubleRomanNum[combineWord];
      i++;
    } else if (mapping.get(s[i])) {
      console.log(s[i]);
      count += singleRomanNum[s[i]];
      console.log(count);
    } else {
      break;
    }
  }

  return count;
};

// console.log(romanToInt("III")) // 3
// console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")); // 1994
