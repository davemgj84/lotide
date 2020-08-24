const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {

  it('should return an empty array when passed an array with two elements or less', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('should return an array containing the single middle element, when passed an array with an odd number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return an array containing the two elements from the middle of a passed array that has an even number of elements', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});