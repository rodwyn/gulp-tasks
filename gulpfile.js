'use strict';

require('require-dir')('gulp');



// var gulp = require('gulp');
// var uglify = require('gulp-uglify');
// var localScreenshots = require('gulp-local-screenshots');
// var zip = require('gulp-zip');
//
// gulp.task('screens', function () {
//   gulp.src('dist/index.html')
//   .pipe(localScreenshots({
//     width: ['1600', '1000', '480', '320'],
//     path: 'dist/'
//   }));
// });
//
// gulp.task('move-dependencies', function () {
//   return gulp.src([
//     'bower_components/owl.carousel/dist/owl.carousel.min.js',
//     'bower_components/sticky-kit/jquery.sticky-kit.min.js'
//     ])
//     .pipe(gulp.dest('dist/js'));
// })
//
// gulp.task('export', ['move-dependencies'], function () {
//
//   return gulp.src('dist/**/*')
//     .pipe(zip('website.zip'))
//     .pipe(gulp.dest('./'))
// });
//
//
// //File paths
// var SCRIPTS_PATH = 'source/scripts/**/*.js';
//
// //Styles
// gulp.task('styles', function () {
//   console.log('staringstyles task');
// });
//

//
// // Images
//
//
// gulp.task('default', function () {
//
// });
//
// gulp.task('watch', function () {
//   require('./server.js');
//   gulp.watch(SCRIPTS_PATH, ['scripts']);
// });
