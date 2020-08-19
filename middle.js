// Implementation of the middle function - find and return the middle values of an array:

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let results = [];
  let median = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return results;
  }
  if (array.length % 2 !== 0) {
    results.push(array[median]);
  } else {
    results.push(array[median - 1]);
    results.push(array[median]);
  }
  return results;
};

// +++++ TESTS +++++

// For arrays with one or two elements, there is no middle. Return an empty array:

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// For arrays with odd number of elements, an array containing a single middle element should be returned:

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned:

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);