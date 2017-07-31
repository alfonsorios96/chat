'use strict';

let gulp = require('gulp');
// let htmlmin = require('gulp-htmlmin');
let browserSync = require('browser-sync');
let nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], () => {
});

/*gulp.task('minify', () => {
    return gulp.src('src/!**!/!*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});*/

/*gulp.task('watch', function() {
    gulp.watch('dist/!**!/!*.*', ['minify']);
});*/

gulp.task('browser-sync', ['nodemon'], () => {
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["src/**/*.*"],
        port: 7000,
    });
});

gulp.task('nodemon', () => {
    nodemon({script: 'server.js'})
        .on('start', ['watch'], () => {
            console.log('start!');
        })
        .on('change', ['watch'], () => {
            console.log('change!');
        })
        .on('restart', () => {
            console.log('restarted!');
        });
})