var gulp = require('gulp');
var uglify = require('gulp-uglify');

//Styles
gulp.task('styles', function () {
  console.log('staringstyles task');
});

//Scripts
gulp.task('scripts', function () {
  console.log('Staring scripts task.');
  return gulp.src('public/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

// Images


gulp.task('default', function () {

});
