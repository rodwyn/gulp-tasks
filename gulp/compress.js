'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

gulp.task('compress', ['delete-zip'], function() {
  gulp.start('generate-zip');
});

gulp.task('delete-zip', function() {
    del(config.exportFileName + '.zip');
    del(config.exportFileName + '/');
});

gulp.task('generate-zip', function() {
  return gulp.src(config.path.build + '**/*')
      .pipe(plugins.zip(config.exportFileName + '.zip'))
      .pipe(gulp.dest('./'))
});
