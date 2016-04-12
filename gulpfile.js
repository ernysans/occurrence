var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var beautify = require('gulp-beautify');
var minify = require('gulp-minify');
var umd = require('gulp-umd');

gulp.task('umd', function() {
  return gulp.src('./src/core/*.js')
    .pipe(umd({
      exports: function(file) {
          return 'occurrence';
        },
        namespace: function(file) {
          return 'occurrence';
        }
    }))
    .pipe(beautify({indentSize: 4}))
    .pipe(gulp.dest('build'));
});

gulp.task('minify', ['umd'], function() {
  gulp.src('./build/occurrence.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'-min.js'
        },
        exclude: ['tasks'],
        output: {
          comments: /^!|@preserve|@license|@cc_on/i
        }
    }))
    .pipe(gulp.dest('./'))
});

gulp.task('default', ['umd', 'minify']);
