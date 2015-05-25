# nbextify

Post-processor for Browserify bundles built with ```--no-bundle-external```

[![npm version](https://img.shields.io/npm/v/nbextify.svg?style=flat-square)](https://www.npmjs.com/package/nbextify) 
 [![npm monthly downloads](https://img.shields.io/npm/dm/nbextify.svg?style=flat-square)](https://www.npmjs.com/package/nbextify)
 [![npm dependencies](https://img.shields.io/david/adamrenklint/nbextify.svg?style=flat-square)](https://david-dm.org/adamrenklint/nbextify)
 [![GitHub stars](https://img.shields.io/github/stars/adamrenklint/nbextify.svg?style=flat-square)](https://github.com/adamrenklint/nbextify/stargazers)
 [![GitHub forks](https://img.shields.io/github/forks/adamrenklint/nbextify.svg?style=flat-square)](https://github.com/adamrenklint/nbextify/network)


## Summary

When running Browserify with ```--no-bundle-external```, the output still contains both internal and external require calls, making it impossible to run the bundle through Browserify again.

This post-processor module will mangle all internal require calls, leaving all external ones, making the bundle ready to be required and browserified as any other module.

Note that this is **not a Browserify transform** - it is a simple post-processor that accepts input via STDIN and prints the result to STDOUT.

## Installation

```sh
$ npm install --save-dev nbextify
```

## Usage

Pipe the output from Browserify into nbextify and out to a destination file.

```sh
$ browserify source.js --no-bundle-external | nbextify > dist.js
```

## Changelog

- **v1.0.0** (2015-05-25)
  - First public release
- **v1.0.1** (2015-05-25)
  - Fixed broken badges in README

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) © 2015 [Adam Renklint](http://adamrenklint.com)
