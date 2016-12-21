'use strict';

const gulp = require('gulp');
const path = require('path');
const uglifyJs = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

module.exports = () => {
    return gulp.src([
            path.join('src', 'js', '**', '*.js'),
            path.join('!.', 'src', 'vendor', '**', '*')
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join('dist', 'js')))
        .pipe(uglifyJs())
        .pipe(rename({basename: 'main.min'}))
        .pipe(gulp.dest(path.join('dist', 'js')));
};
