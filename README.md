# nbextify

Post-processor for Browserify bundles built with ```--no-bundle-external```

[![npm version](https://img.shields.io/npm/v/nbextify.svg?style=flat-square)](https://www.npmjs.com/package/nbextify) 
 [![npm monthly downloads](https://img.shields.io/npm/dm/nbextify.svg?style=flat-square)](https://www.npmjs.com/package/nbextify)
 [![npm dependencies](https://img.shields.io/david/.svg?style=flat-square)](https://david-dm.org/)
 [![GitHub stars](https://img.shields.io/github/stars/.svg?style=flat-square)](https://github.com//stargazers)
 [![GitHub forks](https://img.shields.io/github/forks/.svg?style=flat-square)](https://github.com//network)




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

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) © 2015 [Adam Renklint](http://adamrenklint.com)
