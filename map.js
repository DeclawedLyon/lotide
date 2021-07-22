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


const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// const results1 = map(words, word => word[0]);
// const results2 = map(words, word => word.length);
// const results3 = map(words, word => word === 'tom');
// console.log('---------------------');
// console.log('the original array is: ', words);
// console.log('the first letter is: ', results1);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
// console.log('the length is: ', results2);
// assertArraysEqual(results2, [6, 7, 2, 5, 3]);
// console.log('filter for tom: ', results3);
// assertArraysEqual(results3, [false, false, false, false, true]);
// console.log('-----NEXT TEST-----');