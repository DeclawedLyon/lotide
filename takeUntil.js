const eqArrays = function(arr1, arr2) {
  let i = 0;
  let truth = true;

  if (arr1.length === arr2.length) {
    while (i < arr1.length){
      if (arr1[i] === arr2[i]) {
        truth = true;
      } else if (arr1[i] !== arr2[i]){
        truth = false;
      }
      i++
    } 
    console.log('✅✅✅')
    return truth;
  }
  console.log('🛑🛑🛑')
  return false;
}

const assertArraysEqual = function(firstArray, secondArray) {
  return eqArrays(firstArray, secondArray);
}


const takeUntil = function(array, callback) {
  const result = [];

  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// 'expected: ' + [ 1, 2, 5, 7, 2 ]
//'---'
// 'expected: ' + [ 'I\'ve', 'been', 'to', 'Hollywood' ]

module.exports = takeUntil;