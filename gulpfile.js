var gulp = require('gulp');
var uglify = require('gulp-uglify');
var localScreenshots = require('gulp-local-screenshots');

gulp.task('screens', function () {
  gulp.src('dist/index.html')
  .pipe(localScreenshots({
    width: ['1600', '1000', '480', '320'],
    path: 'dist/'
  }));
});


//File paths
var SCRIPTS_PATH = 'source/scripts/**/*.js';

//Styles
gulp.task('styles', function () {
  console.log('staringstyles task');
});

//Scripts
gulp.task('scripts', function () {
  return gulp.src(SCRIPTS_PATH)
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

// Images


gulp.task('default', function () {

});

gulp.task('watch', function () {
  require('./server.js');
  gulp.watch(SCRIPTS_PATH, ['scripts']);
});
