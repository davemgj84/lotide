const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// +++++ TESTS +++++

// assertArraysEqual(letterPositions("Bootcamp is very challenging").g, [24, 27]);
// assertArraysEqual(letterPositions("David").v, [2]);