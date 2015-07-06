'use strict'

var fs = require('fs')
var assert = require('assert')
var postcss = require('postcss')
var isPresent = require('is-present')
var getVariables = require('..')

describe('postcss-get-variables', function() {

  it('should do something awesome', function(done) {
    postcss()
      .use(getVariables(function(variables) {
        assert.ok(isPresent(variables))
        assert.ok(isPresent(variables['primary-color']))
      }))
      .process(fixture('basic'))
      .then(function() {
        done()
      })
      .catch(function(error) {
        done(error)
      }) 
  })
})

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf8').toString()
}
