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

const without = function(source, itemsToRemove) {
  let results = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      results.push(item);
    }
  }
  return results;
};

// Tests:

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

// Testing to make sure it doesn't affect the original array:

const words = ["hello", "world", "lighthouse"];

without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
