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