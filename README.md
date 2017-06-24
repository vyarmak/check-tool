# check-tool [![Build Status](https://travis-ci.org/vyarmak/check-tool.svg?branch=master)](https://travis-ci.org/vyarmak/check-tool)
Simple set of tools to check variables / properties

# Install

```
$ npm install check-tool
```

# Usage

```js
var checkTool = require('check-tool')

if (checkTool.isDefined(varaiable)) {
	// do something...
}

if (checkTool.isDefinedAndNotNull(varaiable)) {
	// do something...
}

if (checkTool.isDefinedAndNotEmpty(varaiable)) {
	// do something...
}

if (checkTool.isDefinedAndNotNaN(varaiable)) {
	// do something...
}

if (checkTool.isObject(varaiable)) {
	// do something...
}

if (checkTool.isFunction(varaiable)) {
	// do something...
}

if (checkTool.isNumber(varaiable)) {
	// do something...
}
```