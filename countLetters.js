const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
  } else console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
};

testArray = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const countLetters = function(sentence) {
  const result = {};

  for (const letter of sentence) {
      if (letter !== ' ') {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    } 
  }
  console.log(result);
};

module.exports = countLetters;