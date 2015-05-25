# {{package.name}}

Post-processor plugin for Browserify bundles built with ```--no-bundle-external```

{{>badges/npm-version}} {{>badges/npm-downloads}} {{>badges/npm-dependencies}} {{>badges/github-stars}} {{>badges/github-forks}}

## Summary

When running Browserify with ```--no-bundle-external```, the output still contains both internal and external require calls, making it impossible to run the bundle through Browserify again.

This post-processor plugin will mangle all internal require calls, leaving all external ones, making the bundle ready to be required and browserified as any other module.

## Installation

```sh
$ npm install --save-dev {{package.name}}
```

## Usage

Add {{package.name}} as a plugin in your Browserify command.

```sh
$ browserify source.js --no-bundle-external -p {{package.name}} -o dist.js
```

## Changelog

- **v1.0.0** (2015-05-25)
  - First public release
- **v1.0.1** (2015-05-25)
  - Fixed broken badges in README
- **v2.0.0** (2015-05-25)
  - Rewritten as a proper Browserify plugin

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) © 2015 [Adam Renklint](http://adamrenklint.com)
