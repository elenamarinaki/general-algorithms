/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
function binarySearch(array, targetValue) {
    let min = 0;
    let max = array.length - 1;
    let guess;
    while (min <= max) {
        guess = Math.floor((max + min) / 2);
        if (array[guess] === targetValue) {
            return guess;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }
    return -1;
};

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

binarySearch(primes, 73);