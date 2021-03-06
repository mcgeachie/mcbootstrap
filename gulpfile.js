var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect', function () {
    connect.server({
        port: 9000,
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html')
      .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', [
    'connect',
    'watch'
]);
