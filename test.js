var checkTool = require('./index.js')
var test = require('tape')

test('check-tool', function (t) {
  var varUndefined
  var varEmptyString = ''
  var varNull = null
  var varNumber = 1
  var varObject = {
    test: true
  }
  var varFunction = function () {
    console.log('dummy function')
  }
  t.equals(checkTool.isDefined(varUndefined), false, 'passed')
  t.equals(checkTool.isDefined(varEmptyString), true, 'passed')
  t.equals(checkTool.isNotNull(varNull), false, 'passed')
  t.equals(checkTool.isNotEmpty(varEmptyString), false, 'passed')
  t.equals(checkTool.isEmpty(varEmptyString), true, 'passed')
  t.equals(checkTool.isNotNaN(NaN), false, 'passed')
  t.equals(checkTool.isObject(varEmptyString), false, 'passed')
  t.equals(checkTool.isFunction(varObject), false, 'passed')
  t.equals(checkTool.isNumber(varEmptyString), false, 'passed')
  t.equals(checkTool.isObject(varObject), true, 'passed')
  t.equals(checkTool.isFunction(varFunction), true, 'passed')
  t.equals(checkTool.isNumber(varNumber), true, 'passed')
  t.end()
})
