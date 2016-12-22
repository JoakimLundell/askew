'use strict';

const gulp = require('gulp');
const path = require('path');
const uglifyJs = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

module.exports = () => {
    return gulp.src([
            path.join('src', 'js', 'vendor', 'jquery.js'),
            path.join('src', 'js', 'vendor', 'jquery.pjax.js'),
            path.join('src', 'js', 'vendor', 'jquery.iframe-transport.js'),
            path.join('src', 'js', 'vendor', 'jquery.ui.widget.js'),
            path.join('src', 'js', 'vendor', 'jquery.fileupload.js'),
            path.join('src', 'js', 'vendor', 'jquery.row-grid.js'),
            path.join('src', 'js', 'vendor', 'fastclick.js'),
            path.join('src', 'js', 'vendor', 'slick.js'),
            path.join('src', 'js', 'vendor', 'awesomplete.js'),
            path.join('src', 'js', 'vendor', 'onsite.js'),
            path.join('src', 'js', 'vendor', 'esales.js'),
            path.join('src', 'js', 'vendor', 'esales-start.js'),
            path.join('src', 'js', 'vendor', 'tryggehandel.js')
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('vendor.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.join('dist', 'js')))
        .pipe(uglifyJs())
        .pipe(rename({basename: 'vendor.min'}))
        .pipe(gulp.dest(path.join('dist', 'js')));
};
