let MIN = -9999999;
let MAX = 9999999;

// creates a random integer in the range [min, max].
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// creates an array of random numbers of given length.
export function generateRandomArray(len, min, max) {
  let array = [];
  for (let i = 0; i < len; i++) {
    array.push(randomInt(min, max));
  }
  return array;
}

// tests if two integer arrays are equal.
function isEqual(a, b) {
  if (a.length !== b.length) return false;
  else {
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }
}

// Main function that checks the correctness of algorithm.
export function testSort(func) {
  let tests = [
    generateRandomArray(1, MIN, MAX),
    generateRandomArray(15, MIN, MAX),
    generateRandomArray(20, MIN, MAX),
    generateRandomArray(100000, MIN, MAX),
    generateRandomArray(100001, MIN, MAX),
  ];

  for (let i in tests) {
    let built_in_sort = tests[i].sort((a, b) => a - b);
    let func_sort = func(tests[i], 0, tests[i].length);

    if (!isEqual(built_in_sort, func_sort)) return "FAILED";
  }
  return "PASSED";
}
