'use strict'

module.exports = function pluralize (i, str0, str1, str2, str3) {
  if (!i) return parse(str0, i)
  switch (plural(i)) {
    case 0:
      return parse(str1, i)
    case 1:
      return parse(str2, i)
    default:
      return parse(str3, i)
  }
}

function parse (str) {
  var args = [].slice.call(arguments, 1)
  var i = 0

  return str.replace(/%d/g, function () {
    return args[i++]
  })
}

function plural (a) {
  if (a % 10 === 1 && a % 100 !== 11) {
    return 0
  } else if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) {
    return 1
  } else {
    return 2
  }
}
