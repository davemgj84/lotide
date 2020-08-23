const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let results = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      results.push(item);
    }
  }
  return results;
};

module.exports = without;

// ++++++++ TESTS +++++++++

// const words = ["hello", "world", "lighthouse"];

// assertArraysEqual(without(words, "lighthouse"), ["hello", "world"]);