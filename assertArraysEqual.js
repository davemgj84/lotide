// Implement assertArraysEqual:

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

// testing calling function below: 

assertArraysEqual([1, 2, 3], [1, 2, 3]); // should be true
assertArraysEqual([1, 2, 3], [1, 2, 4]); // should be false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // should be false