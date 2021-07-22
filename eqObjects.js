const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
    return true;
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
    return false;
  }
};

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
    return truth;
  }
  return false;
}


const eqObjects = function(object1, object2) {
  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    console.log(false, 'lengths are different');
    return false; 
  } 
    for (key of keys1) {
      if (!keys2.includes(key)) {
        console.log('object doesnt include the key: ', key)
        return false;
      }
      if (object1[key] !== object2[key]) {

        if (Array.isArray(object1[key]) && Array.isArray(object2[key]) && eqArrays(object1[key], object2[key])) {
          console.log('Objects match')
          return true;
        }
        console.log('keys dont match', object1[key], object2[key])
        return false
      }
    } 
    console.log('Objects match');
    return true;
};


// const ab = {a: '1', b: '2'};
// const ba = {b: '2', a: '1'};
// const abc = {a: '1', b: '2', c: '3'}
// eqObjects(ab, ba);
//eqObjects(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log('////////NEXT TEST//////////');

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

//console.log(eqArrays(cd, cd2));
