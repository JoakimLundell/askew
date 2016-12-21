'use strict';

const gulp = require('gulp');
const path = require('path');
const uglifyCss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');
const strip = require('gulp-strip-comments');
const rename = require('gulp-rename');

module.exports = () => {
    return gulp.src(path.join('src', 'less', 'main.less'))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join('dist', 'css')))
        .pipe(strip.text())
        .pipe(uglifyCss())
        .pipe(rename({basename: 'main.min'}))
        .pipe(gulp.dest(path.join('dist', 'css')));
};
