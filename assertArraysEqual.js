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

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
//console.log('////////NEXT TEST//////////');

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

console.log('the truth is: ', eqArrays(['1', '2', 3], ['1', '2', 3, 4]));