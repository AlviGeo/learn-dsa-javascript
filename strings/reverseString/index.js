const stringReverse = (name) => {
  //   const nameArr = name.split("");
  //   const reverseName = nameArr.reverse();
  //   return reverseName.join("");
  return name.split("").reverse().join("");
};

console.log(stringReverse("Hello"));
