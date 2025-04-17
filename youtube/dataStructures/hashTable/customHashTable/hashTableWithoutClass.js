// let obj = {
//   Alvi: "555-0182",
//   Nathan: "315-0322",
// };

const obj = {};
obj.name = "Alvi";
obj.hasOwnProperty = true;

// Will show obj.hasOwnProperty is not a function
// Because JS doesnt block an attempt to overwrite the hasOwnProperty() method
// console.log(obj.hasOwnProperty("name"));

const collection = new Map();

collection.set("Alvi", "555-0182");
collection.set("Nathan", "555-0182");

console.log(collection.get("Nathan")); // 555-0182
console.log(collection.size);

// We also can't overwrite Map inherited properties.
const collection2 = new Map();

collection2.set("Nathan", "555-0182");
collection2["size"] = false;

console.log(collection2.get("size")); // undefined
console.log(collection2.size);

// The map is also iterable
const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

// We can't iterate over a plain object using for...of like we do with Map (example above).
// Because object is not iterable by default and Map has a built-in iterator, but Object does not.
// But we can use Object.entries(), Object.keys(), or Object.value() to iterate.
const myObject = {
  Alvi: "Test01",
  Zoey: "Test02",
};

for (let [key, value] of Object.entries(myObject)) {
  console.log(`${key} = ${value}`);
}

// Another alternative
for (let key in myObject) {
  console.log(`${key} = ${myObject[key]}`);
}
