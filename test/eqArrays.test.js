const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// console.log(assertEqual)
// eqArrays([1, 2, 3], [1, 2, 3]) 
// eqArrays([1, 2, 3], [3, 2, 1])
const result = eqArrays([1, 2, 3], [1, 2, 3])
assertEqual(result, true);