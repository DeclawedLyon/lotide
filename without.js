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
  }
  return truth;
}

const assertArraysEqual = function(firstArray, secondArray) {
  return eqArrays(firstArray, secondArray);
}

const without = function(source, toRemove) {
  // search through source array
  let sourceIndex = 0;
  let newArray = [];
  source.forEach(element => {
    newArray.push(element);
  });
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < toRemove.length; j++) {
      if (source[i] === toRemove[j]) {
        sourceIndex = i;
        newArray.splice(sourceIndex, 1);
        return newArray;
      }
    }
  }
}

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
// console.log(words);
//console.log(without([1, 2, 3], [1]) /* => [2, 3] */ );
//console.log(wls

module.exports = without;