const sentenceCapitalization = (text) => {
  const splitStr = text.toLowerCase().split(" ");
  const textCapitalize = splitStr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  return textCapitalize.join(" ");

  // const results = text.split(" ");
  // const mapping = results.map((result) => result.charAt(0).toUpperCase())
  // // const convertToUppercase = result.charAt(0);
  // return results;
};

console.log(sentenceCapitalization("hello world"));
