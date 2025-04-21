const encode = (strs) => {
  let encodedStr = "";
  if (strs[0] === "") return [""];
  for (let i = 0; i < strs.length; i++) {
    console.log(strs[i].length);
    encodedStr += `${strs[i].length}#${strs[i]}`;
    console.log(encodedStr);
  }
  return encodedStr;
};

const decode = (str) => {
  let result = [];
  let i = 0;

  while (i < str.length) {
    let j = i;
    while (str[j] !== "#") {
      j++;
    }

    const length = parseInt(str.slice(i, j));
    const word = str.slice(j + 1, j + 1 + length);
    result.push(word);
    i = j + 1 + length;
  }

  return result;

  //   Failed for [""] condition
  //   let splitArr = str.split("#");

  //   for (let i = 0; i < splitArr.length; i++) {
  //     const removeInt = splitArr[i].replace(/[0-9]/g, "");

  //     if (removeInt !== "") {
  //       result.push(removeInt);
  //     }
  //   }
};

console.log(encode(["neet", "code", "love", "you"]));
console.log(encode(["we", "say", ":", "yes"]));
console.log(encode([""]));
console.log(decode("4#neet4#code4#love3#you"));
