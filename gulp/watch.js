'use strict';

var path  = require('path');
var gulp  = require('gulp');
var watch = require('gulp-watch');
var conf  = require('./conf');

var browserSync = require('browser-sync');

gulp.task('watch', ['inject'], function() {
  watch([path.join(conf.paths.src, '/*.html'), 'bower.json'],
    {
      usePolling : process.env.POLL || false,
      interval   : 1000
    },
    function() {
      gulp.start('inject-reload');
    });

  watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss')
  ], {
    usePolling : process.env.POLL || false,
    interval   : 1000
  }, function() {
    gulp.start('styles-reload');
  });

  watch(path.join(conf.paths.src, '/app/**/*.js'),
    {
      usePolling : process.env.POLL || false,
      interval   : 1000
    }, function() {
      gulp.start('scripts-reload');
    });

  watch(path.join(conf.paths.src, '/app/**/*.html'),
    {
      usePolling : process.env.POLL || false,
      interval   : 1000
    }, function() {
      browserSync.reload();
    });
});
