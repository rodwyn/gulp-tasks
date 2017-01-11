'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

    gulp.task('default', function() {
     var menu =
         '\t1) Build All\r\n'
       + '\t0) Exit\r\n '
       + '\tWhat would you like to do?';

     return gulp.src('*')
       .pipe(plugins.prompt.prompt({
           type: 'input',
           name: 'type',
           message: menu
       }, function(res){
           switch (res.type) {
             case '1':
              console.log('cccc');
              //  gulp.start('layouts');
              //  gulp.start('styles');
              //  gulp.start('scripts');
              //  gulp.start('generate-images');
              //  gulp.start('fonts');
               break;
           }
       }));
    });
