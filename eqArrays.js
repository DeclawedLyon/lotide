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

module.exports = eqArrays;