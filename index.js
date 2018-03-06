'use strict'

var isDefined = function (param) {
  return typeof param !== 'undefined';
}

/**
 * @deprecated will be changed in favor of isNotNull()
 * @param {Any} param 
 */
var isDefinedAndNotNull = function (param) {
  return isNotNull(param);
}

/**
 * @deprecated will be changed in favor of isNotNaN()
 * @param {Any} param 
 */
var isDefinedAndNotNaN = function (param) {
  return isNotNaN(param);
}

/**
 * @deprecated will be changed in favor of isNotEmpty()
 * @param {Any} param 
 */
var isDefinedAndNotEmpty = function (param) {
  return isNotEmpty(param);
}

var isNotEmpty = function (param) {
  return (isDefinedAndNotNull(param) && param !== '');
}

var isNotNull = function (param) {
  return (isDefined(param) && param !== null);
}

var isEmpty = function (param) {
  return typeof param === 'undefined' || param === null || param == '';
}

var isNotNaN = function (param) {
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
  isNumber: isNumber,
  isEmpty: isEmpty,
  isNotEmpty: isNotEmpty,
  isNotNaN: isNotNaN,
  isNotNull: isNotNull
}
