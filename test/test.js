'use strict'

import fs from 'fs'
import test from 'ava'
import postcss from 'postcss'
import isPresent from 'is-present'
import getVariables from '..'

test('postcss-get-variables', t => {
  t.plan(3)

  postcss()
    .use(getVariables(variables => {
      t.true(isPresent(variables))
      t.true(isPresent(variables['primary-color']))
      t.true(Object.keys(variables).length === 3)
    }))
    .process(fixture('basic'))
    .catch(error => {
      console.log(error)
    }) 
})

function fixture (name) {
  return fs.readFileSync(`./test/fixtures/${name}.css`, 'utf8').toString()
}
