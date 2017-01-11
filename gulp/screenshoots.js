'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

gulp.task('screens', ['clean-screens'], function() {
  gulp.start('generate-screens');
});

gulp.task('clean-screens', function() {
    del('screens/');
});

gulp.task('generate-screens', function() {
  gulp.src(config.path.build + '/**/*.html')
    .pipe(plugins.localScreenshots({
      width: config.screenSizes,
      path: config.path.build
    }));
});
