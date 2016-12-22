'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const jshintStylish = require('jshint-stylish');
const gutil = require('gulp-util');
const path = require('path');

module.exports = () => {
    const stream = gulp.src([
            path.join('src', 'js', '**', '*.js'),
            path.join('!.', 'src', 'js', 'vendor', '**', '*')
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(jshintStylish))
        .pipe(jshint.reporter('fail'));

    // Break process on errors
    stream.on('error', () => {
        stream.on('end', () => {
            process.exit();
        });
    });

    return stream;
};
