const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

// +++++++ TESTS ++++++++++

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // should be true
// assertArraysEqual([1, 2, 3], [1, 2, 4]); // should be false
// assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // should be false