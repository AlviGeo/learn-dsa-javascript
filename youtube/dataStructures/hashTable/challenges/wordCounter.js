// Return the result like this {hello: 1, my: 2, name: 3, is:1, alvi:1}

const text = "Hello my name name name is Alvi";

const wordCounter = (text) => {
  const splitText = text.split(" ");
  const map = new Map();

  splitText.forEach((text) => {
    const word = text.toLowerCase();
    map.set(word, (map.get(word) | 0) + 1);
  });
  return map;
};

// console.log(wordCounter(text));
console.log(Object.fromEntries(wordCounter(text)));

// Second method from the tutorial
function wordCounterSecond(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};
  const words = lowerText.split(/\s+/);

  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }

  return wordMap;
}

const text2 = "Walk the dog dog dog";
// { hello: 1, my: 1, name: 3, is: 1, alvi: 1 }
const wordCounts = wordCounterSecond(text2);

console.log(wordCounts);
