let swap = function (array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

let indexOfMinimum = function (array, startIndex) {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

let selectionSort = function (array) {
  let minIdx = 0;

  for (let i = 0; i < array.length; i++) {
    minIdx = indexOfMinimum(array, i);
    swap(array, i, minIdx);
  }
};

let array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log('Array after sorting:  ' + array);

// assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
