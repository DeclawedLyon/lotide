const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(actual, expected);
    //console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
    return true;
  } else {
    //console.log(actual, expected);
    //console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
    return false;
  }
};

//assertEqual('Lighthouse Labs', 'Bootcamp');
//assertEqual(1, 1);

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
  
  console.log(truth);
  
}
eqArrays([1, 2, 3], [1, 2, 3]) 
eqArrays([1, 2, 3], [3, 2, 1])
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);