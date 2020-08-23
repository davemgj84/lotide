const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

// +++++ TESTS +++++

// For arrays with one or two elements, there is no middle. Return an empty array:

// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

// For arrays with odd number of elements, an array containing a single middle element should be returned:

// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// For arrays with an even number of elements, an array containing the two elements in the middle should be returned:

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);