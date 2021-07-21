const assertEqual = function(actual, expected) {
  if (actual === expected) {
    //console.log(actual, expected);
    console.log(`✅✅✅ Assertion Passed: '${actual}' === '${expected}'`);
    return true;
  } else {
    //console.log(actual, expected);
    console.log(`🛑🛑🛑 Assertion Failed: '${actual}' !== '${expected}'`);
    return false;
  }
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);