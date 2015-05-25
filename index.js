var through = require('through2');

function nbextify (browserify, options) {

  function makeStream () {
    var source = '';
    var stream = through.obj(function (buffer, encoding, next) {
      source += buffer.toString();
      next();
    }, function (next) {
      source = source.replace(/require/g, 'brqre');
      source = source.replace(/brqre\((\'|\").+/g, function (match) {
        if (~match.indexOf('./')) {
          return match;
        }
        else {
          return match.replace('brqre', 'require');
        }
      });
      this.push(new Buffer(source));
      next();
    });
    stream.label = 'nbextify';
    return stream;
  }

  browserify.pipeline.get('wrap').push(makeStream());
  browserify.on('reset', function () {
    browserify.pipeline.get('wrap').push(makeStream());
  });
}

module.exports = nbextify;
