'use strict'

import fs from 'fs'
import test from 'ava'
import postcss from 'postcss'
import isPresent from 'is-present'
import getVariables from '..'


test('postcss-get-variables', t => {
  t.plan(2)

  postcss()
    .use(getVariables(variables => {
      t.true(isPresent(variables))
      t.true(isPresent(variables['primary-color']))
    }))
    .process(fixture('basic'))
    .catch(error => {
      console.log(error)
    }) 
})

function fixture (name) {
  return fs.readFileSync('fixtures/' + name + '.css', 'utf8').toString()
}
