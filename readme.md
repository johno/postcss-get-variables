# postcss-get-variables [![Build Status](https://secure.travis-ci.org/johnotander/postcss-get-variables.png?branch=master)](https://travis-ci.org/johnotander/postcss-get-variables) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Get an object with variables and their values. This is useful for creating living styleguides, etc.

Currently only supports W3C variable syntax.

## Installation

```bash
npm install --save postcss-get-variables
```

## Usage

```javascript
var postcss = require('postcss')
var getVariables = require('postcss-get-variables')

var output = postcss([
  getVariables(function(variables) {
    console.log(variables)
  })
]).process(css)
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
