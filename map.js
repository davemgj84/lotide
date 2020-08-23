const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// +++++++ TESTS +++++++

// const words = ["bootcamp", "serious", "mental", "gymnastics", "everyday"];
// const moreWords = ["this", "is", "just", "a", "test", "but", "I", "am", "confident", "it", "will", "work"];

// const results1 = map(words, word => word[0]);
// const results2 = map(moreWords, word => word[0]);

// assertArraysEqual(["b", "s", "m", "g", "e"], results1);
// assertArraysEqual(["t", "i", "j", "a", "t", "b", "I", "a", "c", "i", "w", "w"], results2);