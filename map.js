const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// +++++++ MAP +++++++

const words = ["bootcamp", "serious", "mental", "gymnastics", "everyday"];
const moreWords = ["this", "is", "just", "a", "test", "but", "I", "am", "confident", "it", "will", "work"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(moreWords, word => word[0]);

assertArraysEqual(["b", "s", "m", "g", "e"], results1);
assertArraysEqual(["t", "i", "j", "a", "t", "b", "I", "a", "c", "i", "w", "w"], results2);