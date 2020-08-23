const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

module.exports = assertObjectsEqual;

// +++++++ TESTS ++++++

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// const abc = { a: "1", b: "2", c: "3" };

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertObjectsEqual(ab, ba);
// assertObjectsEqual(ab, abc);
// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);

