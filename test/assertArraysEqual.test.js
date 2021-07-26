const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log('the truth is: ', eqArrays(['1', '2', 3], ['1', '2', 3, 4]));