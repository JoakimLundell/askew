(function () {
    'use strict';

    const gulp = require('gulp');
    const mkdirp = require('mkdirp');
    const del = require('del');
    const path = require('path');
    const buildTasks = path.join(process.cwd(), 'gulp');
    console.log("buildTasks" + buildTasks);

    gulp.task('clean-dist', () => del('dist'));
    gulp.task('compile-less', require(path.join(buildTasks, 'compile-less')));
    gulp.task('compile-vendor-js', require(path.join(buildTasks, 'compile-vendor-js')));
    gulp.task('compile-js', require(path.join(buildTasks, 'compile-js')));
    gulp.task('jshint', require(path.join(buildTasks, 'jshint')));
    gulp.task('jscs', require(path.join(buildTasks, 'jscs')));
    gulp.task('watcher', require(path.join(buildTasks, 'watcher')));

    gulp.task('build', ['clean-dist'], () => {
        mkdirp.sync('dist');
        gulp.start('compile-less');
        gulp.start('compile-vendor-js');
        gulp.start('compile-js');
    });

    gulp.task('watch', ['build', 'watcher']);
    gulp.task('default', ['build']);
});
