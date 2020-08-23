const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;

// +++++ TESTS ++++++

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual("Hello", "Goodbye");
// assertEqual(3, 3);
// assertEqual(4, 2);