const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('SassSource/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('lib/css'))
}

function watchTask() {
    watch(['SassSource/**/*.scss'], buildStyles)  
}

exports.default = series(buildStyles, watchTask)