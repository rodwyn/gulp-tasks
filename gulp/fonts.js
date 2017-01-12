'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json'),
    runTimestamp = Math.round(Date.now()/1000);

/**
 * Copy fonts
 */
gulp.task('fonts', ['clean-fonts', 'generate-iconfonts'], function() {
  gulp.start('generate-fonts');
  // gulp.start('generate-iconfonts');
});

/**
 * Clean fonts
 */
gulp.task('clean-fonts', function() {
   del(config.path.build + 'fonts/');
 });

/**
 * Generate fonts
 */
gulp.task('generate-fonts', function(){
  gulp.src([config.path.fonts])
    .pipe(plugins.plumber())
    .pipe(gulp.dest(config.path.build + 'fonts/'));
});

gulp.task('generate-iconfonts', function() {
  return gulp.src([config.path.icons])
    .pipe(plugins.iconfont({
      fontName: 'iconfont', // required
      prependUnicode: false, // recommended option
      formats: ['ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
    }))
      
    .pipe(gulp.dest(config.path.build + 'fonts/'));
});
