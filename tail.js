const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;

// ++++++ TESTS +++++

// const numArray = [1, 2, 3, 4, 5, 6];

// assertEqual(numArray.length, 6);

// const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(words.length, 3);