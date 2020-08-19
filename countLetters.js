const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// +++++ TESTS +++++

const results1 = countLetters("lighthouse in the house");
console.log(results1);

// ***** Tried to make tests with the assertEquals - but it doesnt work with comparing two objects - *****
// ***** May need to create an assertObjectEquals function?? *****

// Also doesn't pass ESLint test as assertEqual is assigned a value but is never used