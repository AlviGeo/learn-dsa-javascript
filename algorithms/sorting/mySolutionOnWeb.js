var swap = function (array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var selectionSort = function (array) {
  var n = array.length;

  for (var i = 0; i < n; i++) {
    var minIndex = i;

    for (var j = i + 1; j < n; j++) {
      // Decending
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }

    swap(array, i, minIndex);
  }

  return array;
};

// console.log(selectionSort([7, 9, 4], 0, 1));

// Test cases
// var testArray = [7, 9, 4];
// swap(testArray, 0, 1);
// Program.assertEqual(testArray, [9, 7, 4]);

// var testArray2 = [1, 2, 3, 4, 5];
// swap(testArray2, 1, 3);
// Program.assertEqual(testArray2, [1, 4, 3, 2, 5]);

// var testArray3 = [10, 20, 30, 40, 50];
// swap(testArray3, 2, 4);
// Program.assertEqual(testArray3, [10, 20, 50, 40, 30]);
