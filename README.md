# check-tool [![Build Status](https://travis-ci.org/vyarmak/check-tool.svg?branch=master)](https://travis-ci.org/vyarmak/check-tool)
Tired of passing it from project to project - put this simple set of functions to check variables into a package. Includes check of undefined / defined / defined and not null / defined and not empty / is number / is function is object

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

if (checkTool.isNotNull(varaiable)) {
	// do something...
}

if (checkTool.isNotEmpty(varaiable)) {
	// do something...
}

if (checkTool.isEmpty(varaiable)) {
	// do something...
}

if (checkTool.isNotNaN(varaiable)) {
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