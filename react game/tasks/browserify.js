var gulp = require('gulp'),
  browserify = require('browserify'),
  reactify = require('reactify'),
  source = require('vinyl-source-stream');


gulp.task('browserify', function () {
  var b = browserify({
    entries: [ './main.js' ],
    paths: [ './node_modules', './js/' ],
  });
  b.transform(reactify);
  return b.bundle()
    .pipe(source('compiled.js'))
    .pipe(gulp.dest('./'));
});