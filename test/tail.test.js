const assert = require('chai').assert;
const tail = require('../tail');

// const tail = require('../tail');
// const assertEqual = require('../assertEqual');

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse,Labs");

describe('#tail', () => {
  it('returns "Lighthouse,Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse,Labs")
  });
});