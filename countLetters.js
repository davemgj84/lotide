const assertEqual = require('./assertEqual');
const assertObjectEquals = require('./assertObjectsEqual');

const countLetters = function(string) {
  let results = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

// +++++ TESTS +++++

// const results1 = countLetters("lighthouse in the house");
// assertObjectEquals({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }, results1);


// ***** Tried to make tests with the assertEquals - but it doesnt work with comparing two objects - *****
// ***** Decided to bring it assertObjectsEqual to have proper testing *****
