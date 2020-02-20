let _ = require('lodash');

function toKebabCase(str) {
  return _.kebabCase(str);
}

console.log(toKebabCase('Hello world'));

// function expression:

// let toKebabCase = function(str) {
//   return _.kebabCase(str)
// }
