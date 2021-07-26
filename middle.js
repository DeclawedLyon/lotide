const eqArrays = function(arr1, arr2) {
  //console.log(arr1, arr2)
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
  }
  return truth;
}

const assertArraysEqual = function(firstArray, secondArray) {
  return eqArrays(firstArray, secondArray);
}

const middle = function(array) {
  let midArray = [];
  let length = array.length;
  let index = 0;
  if (array.length <= 2) {
    return midArray;
  }
  if (array.length % 2 === 0) {
    index = array.length / 2 -1;
    let index2 = index + 1;
    midArray.push(array[index], array[index2]);
    return midArray;
  }
  if (array.length % 2 !== 0) {
    index = Math.floor(array.length / 2);
    midArray.push(array[index]);
    return midArray;
  }
}







module.exports = middle;