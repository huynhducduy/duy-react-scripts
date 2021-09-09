// eslint-disable-next-line strict
'use strict'

const babelJest = require('babel-jest')

module.exports = babelJest.default.createTransformer({
  // babelrc: false,
  // configFile: false,
})
