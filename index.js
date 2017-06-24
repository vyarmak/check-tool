'use strict'

var isDefined = function (param) {
  return typeof param !== 'undefined'
}

var isDefinedAndNotNull = function (param) {
  return (isDefined(param) && param !== null)
}

var isDefinedAndNotEmpty = function (param) {
  return (isDefinedAndNotNull(param) && param !== '')
}

var isDefinedAndNotNaN = function (param) {
  return (isDefinedAndNotNull(param) && !isNaN(param))
}

var isObject = function (param) {
  return (isDefinedAndNotNull(param) && typeof param === 'object')
}

var isFunction = function (param) {
  return (isDefinedAndNotNull(param) && typeof param === 'function')
}

var isNumber = function (param) {
  return (isDefinedAndNotNull(param) && !isNaN(parseFloat(param)) && isFinite(param))
}

module.exports = {
  isDefined: isDefined,
  isDefinedAndNotNull: isDefinedAndNotNull,
  isDefinedAndNotEmpty: isDefinedAndNotEmpty,
  isDefinedAndNotNaN: isDefinedAndNotNaN,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber
}
