
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

const assertObjectsEqual = function(actual, expected) {

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
};

module.exports = eqObjects;
