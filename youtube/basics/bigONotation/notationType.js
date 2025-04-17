// Here is the example code for each types of asymptotic notation

// Constant
function getFirstElement(arr) {
  return arr[0]; // Always takes 1 step
}
console.log(getFirstElement([10, 20, 30])); // Output: 10

// Logarithmic Time
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid; // Found it!
    else if (arr[mid] < target) left = mid + 1; // Search right half
    else right = mid - 1; // Search left half
  }

  return -1; // Not found
}
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2

// Linear Time
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
console.log(findMax([4, 1, 7, 9, 2])); // Output: 9

// Quadratic Time
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

printPairs([1, 2, 3]);

// Linearithmic Time
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([5, 2, 9, 1, 7])); // Output: [1, 2, 5, 7, 9]

// Exponential Time
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // Output: 5

// Factorial Time
function permute(arr, temp = []) {
  if (arr.length === 0) {
    console.log(temp);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    let newArr = arr.slice(0, i).concat(arr.slice(i + 1));
    permute(newArr, temp.concat(arr[i]));
  }
}
permute([1, 2, 3]);
