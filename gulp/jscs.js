'use strict';

const gulp = require('gulp');
const jscs = require('gulp-jscs');
const gutil = require('gulp-util');
const path = require('path');

module.exports = () => {
    const stream = gulp.src([
            path.join('src', 'js', '**', '*.js'),
            path.join('!.', 'src', 'js', 'vendor', '**', '*.')
        ])
        .pipe(jscs())
        .pipe(jscs.reporter())
        .pipe(jscs.reporter('fail'));

    // Break process on errors
    stream.on('error', () => {
        stream.on('end', () => {
            process.exit();
        });
    });

    return stream;
};
