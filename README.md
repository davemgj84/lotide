# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @djar84/lotide`

**Require it:**

`const _ = require('@djar84/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Assertion test for eqArrays
* `assertEqual(...)`: Compares if two values are equal
* `assertObjectsEqual(...)`: Assertion test for eqObjects
* `countLetters(...)`: Counts the amount of individual letters that are in a given string
* `countOnly(...)`: When passed an array, it counts the number of times the inputed element shows up
* `eqArrays(...)`: Compares two arrays to check if they are equal
* `eqObjects(...)`: Comapres two objects to check if they are equal
* `findKey(...)`: Finds a particular key within an object
* `fineKeyByValue(...)`: Finds an object key, based on the inputed value
* `head(...)`: When given an array of elements, head returns the first element of the array
* `index(...)`: Index which exports all functions as an object
* `letterPositions(...)`: When given a string, returns the character position or positions in an array
* `map(...)`: When given an array of strings, returns the first character of each string, an a new array
* `middle(...)`: When given an array, it will return the middle element(if odd amount in array) or elements (if even). Returns empty if two or less elements in array passed
* `tail(...)`: Removes the first element of an array and returns the remainder elements as an array
* `takeUntil(...)`: When given an array, it will return a new array with the same elements until a chose point
* `wihtout(...)`: Removes an element of choice from and array, and returns new array