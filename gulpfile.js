var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
  return gulp.src('./src/assets/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('watch', function () {
  gulp.watch('./src/assets/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass'));