const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
};

const tail = function(arr) {
  let newArray = [];
  for (let i = 1; i < arr.length; i++) {
    newArray.push(arr[i]);
  }
  newArray = newArray.join(',');
  return newArray;
};

module.exports = tail;