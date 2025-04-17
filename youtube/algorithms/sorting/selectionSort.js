const selectionSort = (array) => {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    let temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
  return array;
};

// console.log(selectionSort([7, 9, 4]));
console.log(selectionSort([29, 10, 14, 37, 13, 5, 42, 2, 20, 17]));
