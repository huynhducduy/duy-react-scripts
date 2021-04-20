// eslint-disable-next-line strict
'use strict'

const babelJest = require('babel-jest')

module.exports = babelJest.createTransformer({
  babelrc: true,
  configFile: true,
})
