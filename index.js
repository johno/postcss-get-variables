'use strict'

var postcss = require('postcss')

module.exports = postcss.plugin('get-variables', function(callback) {
  return function(root, postcssResult) {
    var variables = {}

    root.eachRule(function(rule) {
      if (rule.selectors.length === 1 && rule.selectors[0] === ':root' && rule.parent.type === 'root') {
        rule.each(function(declaration) {
          if (declaration.type === 'decl' && declaration.prop) {
            variables[declaration.prop.replace('--', '')] = declaration.value
          }
        })
      }
    })

    callback(variables)
  }
})
