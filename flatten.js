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

const flatten = function(arrays) {
  //console.log(arrays);
  let finalArray = [];
  for (const element of arrays) {
    //console.log(element);
    if (Array.isArray(element)) {
      //console.log('the array is an element!');
      for (let i = 0; i < element.length; i++) {
        finalArray.push(element[i]);
      }

    } else {
      finalArray.push(element)
    }
  }
  return finalArray;
  //console.log(finalArray);
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))