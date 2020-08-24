const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual Tests:

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);

// Sad Path 

assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);