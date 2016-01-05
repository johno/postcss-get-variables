'use strict'

var postcss = require('postcss')
var isCssRoot = require('is-css-root')
var cssVariable = require('css-variable')

module.exports = postcss.plugin('get-variables', function (callback) {
  return function (root, postcssResult) {
    var variables = {}

    root.eachRule(function (rule) {
      if (rule.selectors.length === 1 && isCssRoot(rule.selectors[0]) && rule.parent.type === 'root') {
        rule.each(function (declaration) {
          if (declaration.type === 'decl' && declaration.prop) {
            var variable = cssVariable(declaration.prop)
            variables[variable.base()] = declaration.value
          }
        })
      }
    })

    callback(variables)
  }
})
