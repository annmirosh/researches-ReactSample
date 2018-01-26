var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    babel = require('gulp-babel');


gulp.task('browserify', function () {
    var b = browserify({
        entries: ['./main.js'],
        paths: ['./node_modules', './js/'],
    });
    b.transform(reactify);

    b.bundle()
     .pipe(source('compiled.js'))
     .pipe(babel())
     .pipe(browserify({transform: 'reactify'}));

    return b.bundle()
            .pipe(source('compiled.js'))
            .pipe(gulp.dest('./'));
});