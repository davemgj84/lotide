const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;

// ++++++++ TESTS ++++++++

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// assertArraysEqual([1, 2, 5, 7, 2 ], results1);
// assertArraysEqual(["I've", "been", "to", "Hollywood"], results2);