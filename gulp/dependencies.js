'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

gulp.task('copy-scripts-dependencies', function () {
  return gulp.src(config.scriptsDependencies)
    .pipe(gulp.dest(config.path.build + 'js'));
});

gulp.task('copy-styles-dependencies', function () {
  return gulp.src(config.stylesDependencies)
    .pipe(gulp.dest(config.path.build + 'css'));
});
