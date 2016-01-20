'use strict'

var pluralize = require('./lib/pluralize')

// console.log(pluralize(0, 'нет штук', 'штука', 'штуки', 'штук'))  // => нет штук
// console.log(pluralize(1, 'нет штук', 'штука', 'штуки', 'штук'))  // => штука
// console.log(pluralize(2, 'нет штук', 'штука', 'штуки', 'штук'))  // => штуки
// console.log(pluralize(5, 'нет штук', 'штука', 'штуки', 'штук'))  // => штук

// console.log(pluralize(0, 'нет штук', '%d штука', '%d штуки', '%d штук'))  // => нет штук
// console.log(pluralize(1, 'нет штук', '%d штука', '%d штуки', '%d штук'))  // => 1 штука
// console.log(pluralize(2, 'нет штук', '%d штука', '%d штуки', '%d штук'))  // => 2 штуки
// console.log(pluralize(5, 'нет штук', '%d штука', '%d штуки', '%d штук'))  // => 5 штук

module.exports = pluralize
