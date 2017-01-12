'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

/**
 * Copy images
 */
gulp.task('images', ['clean-images'], function() {
  gulp.start('generate-images');
});

/**
 * Clean images
 */
gulp.task('clean-images', function() {
    del(config.path.build + 'img/');
});

/**
 * Generate images
 */
gulp.task('generate-images', function(){
  gulp.src([config.path.img])
    .pipe(plugins.plumber())
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(config.path.build + 'img/'));
});
