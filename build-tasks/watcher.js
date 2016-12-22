'use strict';

const gulp = require('gulp');
const path = require('path');
const watch = require('gulp-watch');

module.exports = () => {
    const less = watch(path.join('src', 'less', '**', '*.less'), () => {
        gulp.start('compile-less');
    });

    const js = watch(path.join('src', 'js', '**', '*.js'), () => {
        gulp.start('compile-js');
    });

    const vendorJs = watch(path.join('src', 'vendor', '**', '*.js'), () => {
        gulp.start('compile-vendor-js');
    });
};
