var gulp = require('gulp'),
  eslint = require('gulp-eslint');

gulp.task('eslint', function () {
  return gulp.src([ 'js/**/*.js' ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});