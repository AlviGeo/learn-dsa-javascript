const arrayChunk = (array, size) => {
  const chunksArr = [];

  for (let i = 0; i < array.length; i += size) {
    chunksArr.push(array.slice(i, i + size));
  }

  return chunksArr;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1,2,3], [4,5,6], [7,8,9]]
console.log(arrayChunk([1, 2, 3, 4, 5], 2)); // [[1,2], [3,4]]

// i=0; i<8; i=0;
// i=3; i<8; i=3;
// i=6; i<8; i=9;
