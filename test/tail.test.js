const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse,Labs");